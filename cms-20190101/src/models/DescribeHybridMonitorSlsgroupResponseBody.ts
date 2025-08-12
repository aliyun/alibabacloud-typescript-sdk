// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridMonitorSLSGroupResponseBodyListSLSGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The Logstore.
   * 
   * @example
   * Logstore-aliyun-all
   */
  SLSLogstore?: string;
  /**
   * @remarks
   * The Simple Log Service project.
   * 
   * @example
   * aliyun-project
   */
  SLSProject?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  SLSRegion?: string;
  /**
   * @remarks
   * The member ID.
   * 
   * **Description** This parameter is returned when you call the operation by using an administrative account.
   * 
   * @example
   * 120886317861****
   */
  SLSUserId?: string;
  static names(): { [key: string]: string } {
    return {
      SLSLogstore: 'SLSLogstore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
      SLSUserId: 'SLSUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLSLogstore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
      SLSUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorSLSGroupResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The time when the Logstore group was created.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1652845630000
   */
  createTime?: string;
  /**
   * @remarks
   * The configurations of the Logstore group.
   */
  SLSGroupConfig?: DescribeHybridMonitorSLSGroupResponseBodyListSLSGroupConfig[];
  /**
   * @remarks
   * The description of the Logstore group.
   */
  SLSGroupDescription?: string;
  /**
   * @remarks
   * The name of the Logstore group.
   * 
   * @example
   * Logstore_test
   */
  SLSGroupName?: string;
  /**
   * @remarks
   * The time when the Logstore group was modified.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1652845630000
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      SLSGroupConfig: 'SLSGroupConfig',
      SLSGroupDescription: 'SLSGroupDescription',
      SLSGroupName: 'SLSGroupName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      SLSGroupConfig: { 'type': 'array', 'itemType': DescribeHybridMonitorSLSGroupResponseBodyListSLSGroupConfig },
      SLSGroupDescription: 'string',
      SLSGroupName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.SLSGroupConfig)) {
      $dara.Model.validateArray(this.SLSGroupConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorSLSGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The queried Logstore groups.
   */
  list?: DescribeHybridMonitorSLSGroupResponseBodyList[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * NotFound.SLSGroup
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66683237-7126-50F8-BBF8-D67ACC919A17
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   */
  success?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': DescribeHybridMonitorSLSGroupResponseBodyList },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

