import * as $dara from '@darabonba/typescript';
export declare class DescribeGatewayListResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The cumulative expiration time of the smart routing benefit. The time follows the ISO 8601 standard and is displayed in UTC. If smart routing is not enabled, this parameter may be omitted or set to null.
     *
     * @example
     * 2026-12-09T06:43:33Z
     */
    autoExpireTime?: string;
    /**
     * @remarks
     * The creation time.
     *
     * The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format and is displayed in UTC.
     *
     * @example
     * 2020-08-14T05:58:42Z
     */
    createTime?: string;
    /**
     * @remarks
     * The database type.
     *
     * @example
     * polardb_mysql
     */
    dbType?: string;
    /**
     * @remarks
     * The expiration time of the cluster.
     * - If the billing method of the cluster is subscription, the actual expiration time is returned.
     * - If the billing method of the cluster is pay-as-you-go, an empty value is returned.
     *
     * The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format and is displayed in UTC.
     *
     * @example
     * 2028-09-01T16:00:00Z
     */
    expireTime?: string;
    /**
     * @remarks
     * Indicates whether the cluster has expired. Valid values:
     *
     * - **true**
     *
     * - **false**
     *
     * @example
     * false
     */
    expired?: boolean;
    /**
     * @remarks
     * The gateway instance ID.
     *
     * @example
     * pg-xxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The description of the gateway.
     *
     * @example
     * pg-xxxxxx
     */
    gwDescription?: string;
    /**
     * @remarks
     * The last modification time.
     *
     * The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format and is displayed in UTC.
     *
     * @example
     * 2024-10-29T09:31:37Z
     */
    modifyTime?: string;
    /**
     * @remarks
     * The billing method. Valid values:
     *
     * - **Postpaid**: pay-as-you-go.
     * - **Prepaid**: subscription.
     *
     * @example
     * Postpaid
     */
    payType?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * Indicates whether smart routing is enabled for the instance. This value is returned by ApsaraDB based on the benefit validity period. A value of true does not indicate that the data plane is healthy.
     *
     * @example
     * true
     */
    smartRoutingEnabled?: boolean;
    /**
     * @remarks
     * The application status. Valid values:
     *
     * - CREATE: creating
     * - ACTIVATION: running
     *
     * @example
     * ACTIVATION
     */
    status?: string;
    /**
     * @remarks
     * The ID of the vSwitch.
     *
     * @example
     * vsw-wz9u0v2yuskt1gth3uuju
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The ID of the virtual private cloud (VPC).
     *
     * @example
     * vpc-****************
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
export declare class DescribeGatewayListResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of gateway instances.
     */
    items?: DescribeGatewayListResponseBodyItems[];
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: string;
    /**
     * @remarks
     * The number of entries on the current page.
     *
     * @example
     * 30
     */
    pageRecordCount?: string;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     * * **30**
     * * **50**
     * * **100**
     *
     * Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * CED079B7-A408-41A1-BFF1-EC608E******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 1
     */
    totalRecordCount?: string;
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
