import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstancePromoteActivityRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the current Alibaba Cloud account.
     *
     * This parameter is required.
     *
     * @example
     * 22973492**********
     */
    aliUid?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5******
     */
    dbInstanceName?: string;
    ownerId?: number;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-acfmy****
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
