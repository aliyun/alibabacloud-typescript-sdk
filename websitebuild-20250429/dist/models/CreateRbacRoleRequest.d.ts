import * as $dara from '@darabonba/typescript';
export declare class CreateRbacRoleRequest extends $dara.Model {
    /**
     * @remarks
     * The customer business ID.
     *
     * @example
     * WS20250731233102000001
     */
    bizId?: string;
    /**
     * @remarks
     * The role data.
     *
     * @example
     * {"name":"customer","label":"xx
     * ","is_default":true,"is_system":false}
     */
    roleData?: string;
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
