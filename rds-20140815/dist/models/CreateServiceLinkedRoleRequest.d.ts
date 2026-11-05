import * as $dara from '@darabonba/typescript';
export declare class CreateServiceLinkedRoleRequest extends $dara.Model {
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call DescribeRegions to query the available regions.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The service-linked role. Valid values:
     *
     * - **AliyunServiceRoleForRds**: the service-linked role associate with ApsaraDB RDS for MySQL.
     * - **AliyunServiceRoleForRdsPgsqlOnEcs**: the service-linked role associate with ApsaraDB RDS for PostgreSQL.
     * - **AliyunServiceRoleForRDSProxyOnEcs**: the service-linked role associate with the database proxy of ApsaraDB RDS for PostgreSQL.
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
