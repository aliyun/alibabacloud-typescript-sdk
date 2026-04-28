// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostCheckAdvicesResponseBodyDataAdviceListTags extends $dara.Model {
  /**
   * @example
   * autoTest-7
   */
  tagKey?: string;
  /**
   * @example
   * basic
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckAdvicesResponseBodyDataAdviceList extends $dara.Model {
  /**
   * @example
   * 1
   */
  accountFolderId?: string;
  /**
   * @example
   * 1
   */
  accountFolderName?: string;
  /**
   * @example
   * 111******767
   */
  aliyunId?: number;
  /**
   * @example
   * {\\"Domains\\": [{\\"Status\\": \\"success\\", \\"\\": \\"cn\\", \\"DomainName\\": \\"www.****.com\\", Region\\"Desc\\": \\"ok\\"}]}
   */
  content?: string;
  /**
   * @remarks
   * Email
   * 
   * @example
   * xxx
   */
  email?: string;
  /**
   * @example
   * 2025-03-05T02:02:00Z
   */
  endTime?: number;
  /**
   * @example
   * 2025-03-05T02:02:00Z
   */
  gmtDeleted?: number;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * i-2ze5*****ef7d2lk63in
   */
  resourceId?: string;
  /**
   * @example
   * 1200***bles_df
   */
  resourceName?: string;
  /**
   * @example
   * 1
   */
  severity?: string;
  /**
   * @example
   * 2025-02-04T16:00:00Z
   */
  startTime?: number;
  tags?: DescribeCostCheckAdvicesResponseBodyDataAdviceListTags[];
  url?: string;
  /**
   * @example
   * test
   */
  userName?: string;
  /**
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountFolderId: 'AccountFolderId',
      accountFolderName: 'AccountFolderName',
      aliyunId: 'AliyunId',
      content: 'Content',
      email: 'Email',
      endTime: 'EndTime',
      gmtDeleted: 'GmtDeleted',
      product: 'Product',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      severity: 'Severity',
      startTime: 'StartTime',
      tags: 'Tags',
      url: 'Url',
      userName: 'UserName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountFolderId: 'string',
      accountFolderName: 'string',
      aliyunId: 'number',
      content: 'string',
      email: 'string',
      endTime: 'number',
      gmtDeleted: 'number',
      product: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      severity: 'string',
      startTime: 'number',
      tags: { 'type': 'array', 'itemType': DescribeCostCheckAdvicesResponseBodyDataAdviceListTags },
      url: 'string',
      userName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckAdvicesResponseBodyData extends $dara.Model {
  adviceList?: DescribeCostCheckAdvicesResponseBodyDataAdviceList[];
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  /**
   * @example
   * 4
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceList: 'AdviceList',
      checkId: 'CheckId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceList: { 'type': 'array', 'itemType': DescribeCostCheckAdvicesResponseBodyDataAdviceList },
      checkId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.adviceList)) {
      $dara.Model.validateArray(this.adviceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckAdvicesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeCostCheckAdvicesResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 566331F9-****-550F-B745-A730331F97A9
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeCostCheckAdvicesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

