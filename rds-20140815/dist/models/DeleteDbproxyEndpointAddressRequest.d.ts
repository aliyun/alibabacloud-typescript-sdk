import * as $dara from '@darabonba/typescript';
export declare class DeleteDBProxyEndpointAddressRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-t4n3a****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The network type of the database proxy endpoint that you want to delete. Valid values:
     * * **Public**: public network
     * * **VPC**: internal network (VPC)
     * * **Classic**: internal network (classic network)
     *
     * Default value: **Classic**.
     *
     * > - You cannot delete the default internal network endpoint.
     * > - ApsaraDB RDS for PostgreSQL supports only **Public** and **VPC**.
     *
     * This parameter is required.
     *
     * @example
     * Public
     */
    DBProxyConnectStringNetType?: string;
    /**
     * @remarks
     * The ID of the database proxy endpoint. You can call the DescribeDBProxyEndpoint operation to query the ID.
     *
     * This parameter is required.
     *
     * @example
     * ta9um4****
     */
    DBProxyEndpointId?: string;
    /**
     * @remarks
     * **[Deprecated]** This parameter is deprecated. You do not need to configure it.
     *
     * @example
     * normal
     */
    DBProxyEngineType?: string;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
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
