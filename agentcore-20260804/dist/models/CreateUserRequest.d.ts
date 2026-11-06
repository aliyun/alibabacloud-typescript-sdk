import * as $dara from '@darabonba/typescript';
export declare class CreateUserRequestBody extends $dara.Model {
    /**
     * @remarks
     * The display name of the user. The name must be 1 to 32 characters in length.
     *
     * This parameter is required.
     *
     * @example
     * Zhang San
     */
    displayName?: string;
    /**
     * @remarks
     * The email address of the user. The email address can be up to 256 characters in length.
     *
     * @example
     * user-01@example.com
     */
    email?: string;
    /**
     * @remarks
     * The username. The username must be unique within the workspace, can contain only lowercase letters, digits, and hyphens, must start and end with a lowercase letter or a digit, and must be 1 to 32 characters in length. Reserved names such as manager, admin, or any name starting with worker- are not allowed.
     *
     * This parameter is required.
     *
     * @example
     * user-01
     */
    name?: string;
    /**
     * @remarks
     * The remarks for the user. The remarks can be up to 1,024 characters in length.
     *
     * @example
     * Agent operation team member
     */
    note?: string;
    /**
     * @remarks
     * The initial password of the user. The password must be 8 to 32 characters in length and must contain uppercase letters, lowercase letters, digits, and special characters. It cannot contain the username. If this parameter is not specified, the server generates a random password and returns it in the initialPassword field of the response.
     *
     * @example
     * Example@2026
     */
    password?: string;
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
export declare class CreateUserRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for creating a user.
     */
    body?: CreateUserRequestBody;
    /**
     * @remarks
     * Not supported.
     *
     * @example
     * Not supported
     */
    clientToken?: string;
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
