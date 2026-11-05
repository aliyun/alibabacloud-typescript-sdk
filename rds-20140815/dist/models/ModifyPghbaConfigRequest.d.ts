import * as $dara from '@darabonba/typescript';
export declare class ModifyPGHbaConfigRequestHbaItem extends $dara.Model {
    /**
     * @remarks
     * This parameter is required.
     */
    address?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    database?: string;
    mask?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    method?: string;
    option?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    priorityId?: number;
    /**
     * @remarks
     * This parameter is required.
     */
    type?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    user?: string;
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
export declare class ModifyPGHbaConfigRequest extends $dara.Model {
    clientToken?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    hbaItem?: ModifyPGHbaConfigRequestHbaItem[];
    /**
     * @remarks
     * This parameter is required.
     */
    opsType?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
