import * as $dara from '@darabonba/typescript';
export declare class UpdateExtensionsRequest extends $dara.Model {
    /**
     * @remarks
     * A client token used to ensure the idempotence of the request. The client generates this value. Make sure that the value is unique for each request. The token is case-sensitive and cannot exceed 64 ASCII characters.
     *
     * @example
     * 6000170000591aed949d0f5********************
     */
    clientToken?: string;
    /**
     * @remarks
     * The name of the source instance.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the database.
     *
     * This parameter is required.
     *
     * @example
     * auto_test_db
     */
    DBNames?: string;
    /**
     * @remarks
     * The extensions to update. Separate multiple extensions with commas (,).
     *
     * This parameter is required.
     *
     * @example
     * postgres_fdw
     */
    extensions?: string;
    /**
     * @example
     * test@example.com
     */
    ownerAccount?: string;
    /**
     * @example
     * 1234567890123456
     */
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-**********
     */
    resourceGroupId?: string;
    /**
     * @example
     * test@example.com
     */
    resourceOwnerAccount?: string;
    /**
     * @example
     * 1234567890123456
     */
    resourceOwnerId?: number;
    /**
     * @example
     * 7.7
     */
    version?: string;
    /**
     * @remarks
     * The ID of the virtual private cloud (VPC) where the endpoint is located.
     *
     * @example
     * vpc-bp1qpo0kug3a20qqe****
     */
    vpcId?: string;
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
