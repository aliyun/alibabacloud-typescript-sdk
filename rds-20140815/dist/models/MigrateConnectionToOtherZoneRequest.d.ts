import * as $dara from '@darabonba/typescript';
export declare class MigrateConnectionToOtherZoneRequest extends $dara.Model {
    /**
     * @remarks
     * The endpoint of the instance. This endpoint is specified during creation and is used to generate a connection string.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp1oypo6ky19y****
     */
    connectionString?: string;
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp1oypo6ky19y****
     */
    DBInstanceId?: string;
    ownerId?: number;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The zone ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou-i
     */
    zoneId?: string;
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
