import * as $dara from '@darabonba/typescript';
export declare class DescribeVSwitchListRequest extends $dara.Model {
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. The value must be an integer greater than 0 and no greater than the maximum value of the Integer type.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     *
     * * **30**
     * * **50**
     * * **100**
     *
     * Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID of the vSwitch.
     *
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query all region IDs supported by vSwitches.
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
     * The list of vSwitches in the VPC.
     */
    vSwitchIds?: string[];
    /**
     * @remarks
     * The VPC ID.
     *
     * > You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to view VPC details.
     *
     * @example
     * vpc-25cdvfeq58pl****
     */
    vpcId?: string;
    /**
     * @remarks
     * The zone ID of the vSwitch.
     *
     * @example
     * cn-hangzhou-g
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
