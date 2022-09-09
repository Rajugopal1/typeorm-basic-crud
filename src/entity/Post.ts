import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./Users";

@Entity()
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  content: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
