import * as $dara from '@darabonba/typescript';
export declare class DescribeRdsVSwitchsRequest extends $dara.Model {
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view available regions.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
    /**
     * @remarks
     * The ID of the virtual private cloud (VPC) where the endpoint is located.
     *
     * @example
     * vpc-*************
     */
    vpcId?: string;
    /**
     * @remarks
     * The zone ID.
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
