// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExportDesktopListInfoRequestTag } from "./ExportDesktopListInfoRequestTag";


export class ExportDesktopListInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the cloud computer.
   * 
   * Default value: Postpaid. Valid values:
   * 
   * *   Postpaid: pay-as-you-go
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PrePaid: subscription
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify 1 to 100 IDs.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The name of the cloud computer.
   * 
   * @example
   * testName
   */
  desktopName?: string;
  /**
   * @remarks
   * The status of the cloud computers.
   * 
   * Valid values:
   * 
   * *   Stopped
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Starting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Rebuilding
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopping
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Expired
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleted
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Pending
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The IDs of the end users of the cloud computer. You can specify 1 to 100 IDs.
   * 
   * >  During a specific period of time, only one user can connect to and use the cloud computer.
   */
  endUserId?: string[];
  /**
   * @remarks
   * The time when a subscription cloud computer expires.
   * 
   * @example
   * 2022-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the cloud computer pool to which the cloud computers belong.
   * 
   * @example
   * dg-boyczi8enfyc5***
   */
  groupId?: string;
  /**
   * @remarks
   * The language in which the cloud computer is displayed in the console UI. You can export the list of cloud computers in the specified language.
   * 
   * Default value: zh-CN. Valid values:
   * 
   * *   zh-CN: Simplified Chinese
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   en-GB: British English
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * `zh-CN`
   */
  langType?: string;
  /**
   * @remarks
   * The number of entries per page.
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
   * The token that is used for the next query. If this parameter is empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the policy that is attached to the cloud computer.
   * 
   * @example
   * system-all-enabled-policy
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags that are added to the cloud computer. A tag is a key-value pair that consists of a tag key and a tag value. Tags are used to identify resources. You can use tags to manage cloud computers by group. This facilitates search and batch operations. For more information, see [Use tags to manage cloud computers](https://help.aliyun.com/document_detail/203781.html).
   */
  tag?: ExportDesktopListInfoRequestTag[];
  /**
   * @remarks
   * The username of the end user who is using the cloud computer.
   * 
   * @example
   * alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      endUserId: 'EndUserId',
      expiredTime: 'ExpiredTime',
      groupId: 'GroupId',
      langType: 'LangType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      tag: 'Tag',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      desktopStatus: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      groupId: 'string',
      langType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': ExportDesktopListInfoRequestTag },
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
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

