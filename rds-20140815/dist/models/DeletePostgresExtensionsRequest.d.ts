import * as $dara from '@darabonba/typescript';
export declare class DeletePostgresExtensionsRequest extends $dara.Model {
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, and you must ensure that the value is unique across different requests. The value can be up to 64 ASCII characters in length and cannot contain non-ASCII characters.
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
     * pgm-bp156o9ti493****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The name of the database where the extension resides. Separate multiple databases with commas (,).
     *
     * This parameter is required.
     *
     * @example
     * test_db
     */
    DBNames?: string;
    /**
     * @remarks
     * The name of the extension. Separate multiple extensions with commas (,).
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
