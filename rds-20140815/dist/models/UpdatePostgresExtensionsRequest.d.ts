import * as $dara from '@darabonba/typescript';
export declare class UpdatePostgresExtensionsRequest extends $dara.Model {
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate requests. You can generate the value of this parameter on the client side. The value must be unique across different requests and can contain a maximum of 64 ASCII characters. The value cannot contain non-ASCII characters.
     *
     * @example
     * ETnLKlblzczshOTUbOCz****
     */
    clientToken?: string;
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pgm-gc7f1****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The name of the database in the instance. You can call the DescribeDatabases operation to query the name.
     *
     * This parameter is required.
     *
     * @example
     * test_db
     */
    DBNames?: string;
    /**
     * @remarks
     * The names of the plug-ins. Separate multiple plug-in names with commas (,).
     *
     * This parameter is required.
     *
     * @example
     * citext
     */
    extensions?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The ID of the resource group.
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
