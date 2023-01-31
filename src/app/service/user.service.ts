import { Injectable } from "@angular/core";
import { User } from "../model/user";

@Injectable({providedIn: 'root'})
export class UserService {

    users: User[] = [
        new User({
            name: 'Gabriel',
            active: false
        }),
        new User({
            name: 'Joel',
            active: false
        }),
        new User({
            name: 'Arthur',
            active: false
        }),
    ];

    get activeUsers(): User[] {
        let activeUsers: User[] = [];

        this.users.forEach((user: User) => {
            if (user.active) {
                activeUsers.push(user);
            }
        });

        return activeUsers;
    }

    get inactiveUsers(): User[] {
        let inactiveUsers: User[] = [];

        this.users.forEach((user: User) => {
            if (!user.active) {
                inactiveUsers.push(user);
            }
        });

        return inactiveUsers;
    }

}