import * as $dara from '@darabonba/typescript';
export declare class DescribeClassDetailsRequest extends $dara.Model {
    /**
     * @remarks
     * The instance type code.
     *
     * This parameter is required.
     *
     * @example
     * rds.mysql.s3.large
     */
    classCode?: string;
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. The value cannot contain non-ASCII characters.
     *
     * @example
     * ETnLKlblzczshOTUbOCz****
     */
    clientToken?: string;
    /**
     * @remarks
     * The commodity code. Valid values:
     *
     * * **bards**: pay-as-you-go primary instance
     * * **rds**: subscription primary instance
     * * **rords**: pay-as-you-go read-only instance
     * * **rds_rordspre_public_cn**: subscription read-only instance
     * * **bards_intl**: pay-as-you-go primary instance
     * * **rds_intl**: subscription primary instance
     * * **rords_intl**: pay-as-you-go read-only instance
     * * **rds_rordspre_public_intl**: subscription read-only instance
     *
     * This parameter is required.
     *
     * @example
     * rds
     */
    commodityCode?: string;
    /**
     * @remarks
     * The database engine type.
     *
     * This parameter is required.
     *
     * @example
     * MySQL
     */
    engine?: string;
    /**
     * @remarks
     * The database engine version.
     *
     * This parameter is required.
     *
     * @example
     * 5.6
     */
    engineVersion?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the available region IDs.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID. You can call the DescribeDBInstanceAttribute operation to obtain the ID.
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
