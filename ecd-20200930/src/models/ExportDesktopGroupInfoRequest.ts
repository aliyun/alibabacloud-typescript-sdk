// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportDesktopGroupInfoRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You cannot specify an empty string as a tag key. A tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify an empty string as a tag key. A tag value can be up to 128 characters in length and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class ExportDesktopGroupInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the cloud computer share.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The IDs of the cloud computer shares.
   */
  desktopGroupId?: string[];
  /**
   * @remarks
   * The name of the cloud computer share.
   * 
   * @example
   * test
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The IDs of the users to be authorized.
   */
  endUserId?: string[];
  /**
   * @remarks
   * The expiration date of the subscription cloud computer share.
   * 
   * @example
   * 2022-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * zh-CN
   */
  langType?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. If this parameter is left empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-467671****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the security policy.
   * 
   * @example
   * pg-53iyi2aar0nd6****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: ExportDesktopGroupInfoRequestTag[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      endUserId: 'EndUserId',
      expiredTime: 'ExpiredTime',
      langType: 'LangType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      desktopGroupId: { 'type': 'array', 'itemType': 'string' },
      desktopGroupName: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      langType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': ExportDesktopGroupInfoRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.desktopGroupId)) {
      $dara.Model.validateArray(this.desktopGroupId);
    }
    if(Array.isArray(this.endUserId)) {
      $dara.Model.validateArray(this.endUserId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

