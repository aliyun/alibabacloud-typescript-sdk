// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportDesktopListInfoRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. If you specify `Tag`, `Key` is required. The tag key cannot exceed 128 characters, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`. It also cannot consist of only spaces.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value cannot exceed 128 characters, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class ExportDesktopListInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the cloud desktop.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The cloud desktop IDs. You can specify 1 to 100 IDs.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * DemoComputer01
   */
  desktopName?: string;
  /**
   * @remarks
   * The status of the cloud desktop.
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The list of authorized usernames for the cloud desktop. You can specify 1 to 100 usernames.
   * 
   * > Only one user can connect to and use the cloud desktop at a time.
   */
  endUserId?: string[];
  /**
   * @remarks
   * The expiration time of the subscription cloud desktop.
   * 
   * @example
   * 2022-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the cloud desktop pool to which the cloud desktop belongs.
   * 
   * @example
   * dg-boyczi8enfyc5***
   */
  groupId?: string;
  /**
   * @remarks
   * The language type displayed on the frontend page. The backend sets the language type of the exported file based on this value.
   * 
   * @example
   * `zh-CN`
   */
  langType?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.
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
   * The pagination token for the next query. An empty value indicates that there are no more results.
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
   * The ID of the policy associated with the cloud desktop.
   * 
   * @example
   * system-all-enabled-policy
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
   * The list of tags. A tag consists of a key-value pair and is used to mark resources. You can use tags to group and manage cloud desktops for easier searching and batch operations. For more information, see [Use tags to manage cloud desktops](https://help.aliyun.com/document_detail/203781.html).
   */
  tag?: ExportDesktopListInfoRequestTag[];
  /**
   * @remarks
   * The username of the user who is currently using the cloud desktop.
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

