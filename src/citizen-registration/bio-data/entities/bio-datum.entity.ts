import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class BioDatum {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column({ nullable: true })
    middleName: string;
    @Column()
    lastName: string;
    @Column({ nullable: true })
    dateOfBirth: Date;
    @Column({ nullable: true })
    nationality: string
    @Column({ nullable: true })
    Countryofbirth: string;
    @Column({ default: true })
    Stateofbirth: string;
    @Column({ default: true })
    Townofbirth: string;
    @Column({ default: true })
    Residenceaddress: string;
    @Column({ default: true })
    Profession: string;
}
