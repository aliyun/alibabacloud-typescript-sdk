import * as $dara from '@darabonba/typescript';
export declare class UpdateUserRequestBody extends $dara.Model {
    /**
     * @remarks
     * The display name of the user. The name must be 1 to 32 characters in length. You must specify at least one of the displayName, email, and note parameters.
     *
     * @example
     * John Doe
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
     * The note for the user. The note can be up to 1,024 characters in length.
     *
     * @example
     * Agent operations team member
     */
    note?: string;
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
export declare class UpdateUserRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for updating a user.
     */
    body?: UpdateUserRequestBody;
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
