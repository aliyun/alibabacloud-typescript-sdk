import * as $dara from '@darabonba/typescript';
export declare class CheckServiceLinkedRoleRequest extends $dara.Model {
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     * > This parameter does not affect the query result. You can specify any region ID. You can call the DescribeRegions operation to query available region IDs.
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
     * rg-bp67acfmxazb4p****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The service-linked role.
     * > For more information about the service-linked roles supported by ApsaraDB RDS, see [Service-linked roles](https://help.aliyun.com/document_detail/342840.html).
     *
     * This parameter is required.
     *
     * @example
     * AliyunServiceRoleForRdsPgsqlOnEcs
     */
    serviceLinkedRole?: string;
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
