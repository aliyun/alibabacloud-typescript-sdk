import * as $dara from '@darabonba/typescript';
export declare class UpdateRbacRoleRequest extends $dara.Model {
    /**
     * @remarks
     * The application instance ID.
     *
     * @example
     * WD20250814102215000001
     */
    bizId?: string;
    /**
     * @remarks
     * The role data.
     *
     * @example
     * {"name":"customer","label":"xx1
     * ","is_default":true,"is_system":false}
     */
    roleData?: string;
    /**
     * @remarks
     * The role ID.
     *
     * @example
     * agent@ly-online
     */
    roleId?: string;
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
