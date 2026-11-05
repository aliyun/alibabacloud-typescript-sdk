import * as $dara from '@darabonba/typescript';
export declare class UpdateContextDatabaseMemberRequest extends $dara.Model {
    /**
     * @remarks
     * The member ID.
     *
     * This parameter is required.
     *
     * @example
     * mb-cz51tnnp8****
     */
    memberId?: string;
    /**
     * @remarks
     * The new role. Valid values: owner, admin, and member. If this parameter is not specified, the current role is retained.
     *
     * @example
     * admin
     */
    role?: string;
    /**
     * @remarks
     * The new status. Valid values: active, disabled, and deleted. If this parameter is not specified, the current status is retained.
     *
     * @example
     * disabled
     */
    status?: string;
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
