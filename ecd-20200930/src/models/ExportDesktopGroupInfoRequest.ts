// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportDesktopGroupInfoRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. This parameter cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
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
   * The billing method of the shared cloud desktops.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The list of shared cloud desktop IDs.
   */
  desktopGroupId?: string[];
  /**
   * @remarks
   * The name of the shared cloud desktop.
   * 
   * @example
   * CloudComputerPool01
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The list of authorized user IDs for the shared cloud desktops.
   */
  endUserId?: string[];
  /**
   * @remarks
   * The expiration time of the subscription shared cloud desktops.
   * 
   * @example
   * 2022-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * zh-CN
   */
  langType?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.    
   * 
   * - Maximum value: 100.
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. An empty value indicates that no more results exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the office network to which the shared cloud desktops belong.
   * 
   * @example
   * cn-hangzhou+dir-467671****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the policy associated with the shared cloud desktops.
   * 
   * @example
   * pg-53iyi2aar0nd6****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of tags. A maximum of 20 tags can be specified.
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

