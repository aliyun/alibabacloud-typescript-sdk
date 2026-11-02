// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVSwitchCidrReservationsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. If you specify this parameter, you cannot enter an empty string. A tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. If you specify this parameter, you can enter an empty string. A tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVSwitchCidrReservationsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP version of the reserved CIDR block for a vSwitch. Valid values:
   * 
   * - **IPv4** (default): IPv4.
   * - **IPv6**: IPv6.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * - Leave this parameter empty for the first query and when no next query is required.
   * - If a next query is required, set this parameter to the NextToken value returned from the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the vSwitch.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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
   * The tag information.
   */
  tags?: ListVSwitchCidrReservationsRequestTags[];
  /**
   * @remarks
   * The instance IDs of the reserved CIDR blocks for a vSwitch. You can specify up to 10 reserved CIDR blocks.
   */
  vSwitchCidrReservationIds?: string[];
  /**
   * @remarks
   * The type of the reserved CIDR block for a vSwitch. Valid values: **prefix**, which indicates that addresses are allocated by CIDR block.
   * 
   * > When users and cloud services automatically allocate CIDR blocks for elastic network interfaces (ENIs), the CIDR blocks must be allocated from the reserved CIDR blocks. If all addresses in the reserved CIDR blocks are allocated, the system returns an error.
   * 
   * @example
   * prefix
   */
  vSwitchCidrReservationType?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the reserved CIDR block that you want to query belongs.
   * 
   * @example
   * vsw-25navfgbue4g****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      vSwitchCidrReservationIds: 'VSwitchCidrReservationIds',
      vSwitchCidrReservationType: 'VSwitchCidrReservationType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': ListVSwitchCidrReservationsRequestTags },
      vSwitchCidrReservationIds: { 'type': 'array', 'itemType': 'string' },
      vSwitchCidrReservationType: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vSwitchCidrReservationIds)) {
      $dara.Model.validateArray(this.vSwitchCidrReservationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

