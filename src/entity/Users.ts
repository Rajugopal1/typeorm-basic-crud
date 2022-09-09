import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Post } from "./Post";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ nullable: false })
  userName: string;

  @Column({ nullable: false })
  password: string;

  //   @OneToOne(() => Post)
  //   @JoinColumn()
  //   post: Post;
  @OneToMany(() => Post, (post) => post.user, {
    nullable: false,
    cascade: true,
  })
  posts: Post[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
