import * as $dara from '@darabonba/typescript';
export declare class DescribePendingMaintenanceActionsRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to return historical tasks. Valid values:
     *
     * - **0**: returns current tasks.
     *
     * - **1**: returns historical tasks.
     *
     * Default value: **0**.
     *
     * @example
     * 1
     */
    isHistory?: number;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-************
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
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
