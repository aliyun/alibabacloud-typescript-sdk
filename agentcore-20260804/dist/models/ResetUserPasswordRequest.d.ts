import * as $dara from '@darabonba/typescript';
export declare class ResetUserPasswordRequestBody extends $dara.Model {
    /**
     * @remarks
     * The user ID. You must specify at least one of agentCoreUserId and username. If both are specified, agentCoreUserId takes precedence.
     *
     * @example
     * usr-123456
     */
    agentCoreUserId?: string;
    /**
     * @remarks
     * The new password. The password must be 8 to 32 characters in length and must contain uppercase letters, lowercase letters, digits, and special characters. It cannot contain the username. If you do not specify this parameter, the server generates a random password.
     *
     * @example
     * Example@2026
     */
    password?: string;
    /**
     * @remarks
     * The username. You must specify at least one of agentCoreUserId and username.
     *
     * @example
     * user-01
     */
    username?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ResetUserPasswordRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for resetting the user password.
     */
    body?: ResetUserPasswordRequestBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
