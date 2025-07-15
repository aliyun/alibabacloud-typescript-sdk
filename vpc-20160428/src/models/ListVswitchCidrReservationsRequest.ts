// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVSwitchCidrReservationsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length, and cannot start with acs: or aliyun. It cannot contain http:// or https://.
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
   * The IP version of the reserved CIDR block. Valid values:
   * 
   * *   **IPv4** (default)
   * *   **IPv6**
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
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The tags.
   */
  tags?: ListVSwitchCidrReservationsRequestTags[];
  /**
   * @remarks
   * The ID of the reserved CIDR block. You can specify at most 10 IDs.
   */
  vSwitchCidrReservationIds?: string[];
  /**
   * @remarks
   * The type of the reserved CIDR block. Set the value to **prefix**.
   * 
   * >  When you allocate CIDR blocks, or enable the service to automatically allocate CIDR blocks to elastic network interfaces (ENIs), the CIDR blocks to allocate must fall into the reserved CIDR block. If the reserved CIDR is exhausted, an error message is returned.
   * 
   * @example
   * prefix
   */
  vSwitchCidrReservationType?: string;
  /**
   * @remarks
   * The ID of the vSwitch for which you want to query reserved CIDR blocks.
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

