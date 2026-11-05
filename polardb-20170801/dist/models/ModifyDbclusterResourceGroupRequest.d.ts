import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterResourceGroupRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the new resource group.
     *
     * This parameter is required.
     *
     * @example
     * rg-**********
     */
    newResourceGroupId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The original resource group ID.
     *
     * @example
     * rg-**********
     */
    resourceGroupId?: string;
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
