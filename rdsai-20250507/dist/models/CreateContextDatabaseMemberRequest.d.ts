import * as $dara from '@darabonba/typescript';
export declare class CreateContextDatabaseMemberRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to issue the first API key when the member is created. Default value: false.
     *
     * @example
     * true
     */
    generateInitialKey?: boolean;
    /**
     * @remarks
     * The name of the first API key. This parameter takes effect only when GenerateInitialKey is set to true.
     *
     * @example
     * my-key
     */
    initialKeyName?: string;
    /**
     * @remarks
     * The member name.
     *
     * This parameter is required.
     *
     * @example
     * Alice
     */
    memberName?: string;
    /**
     * @remarks
     * The member role. Valid values: owner, admin, and member.
     *
     * This parameter is required.
     *
     * @example
     * member
     */
    role?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * This parameter is required.
     *
     * @example
     * ws-as1llqmkol****
     */
    workspaceId?: string;
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
