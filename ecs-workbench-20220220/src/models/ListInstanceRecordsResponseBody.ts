// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRecordsResponseBodyRootRecordList extends $dara.Model {
  /**
   * @example
   * 1234
   */
  accountId?: number;
  /**
   * @example
   * 2023-11-16T02:59:39Z
   */
  expireTime?: string;
  /**
   * @example
   * 2023-04-10T12:41:28Z
   */
  gmtCreate?: string;
  /**
   * @example
   * i-xxxx
   */
  instanceId?: string;
  /**
   * @example
   * https://ecs-workbench.aliyun.com/view/instance/record/replay/abc
   */
  instanceRecordUrl?: string;
  /**
   * @example
   * 123
   */
  recordDurationMillis?: number;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * abc
   */
  terminalSessionToken?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
      instanceRecordUrl: 'InstanceRecordUrl',
      recordDurationMillis: 'RecordDurationMillis',
      status: 'Status',
      terminalSessionToken: 'TerminalSessionToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      expireTime: 'string',
      gmtCreate: 'string',
      instanceId: 'string',
      instanceRecordUrl: 'string',
      recordDurationMillis: 'number',
      status: 'string',
      terminalSessionToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRecordsResponseBodyRoot extends $dara.Model {
  recordList?: ListInstanceRecordsResponseBodyRootRecordList[];
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      recordList: 'RecordList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordList: { 'type': 'array', 'itemType': ListInstanceRecordsResponseBodyRootRecordList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recordList)) {
      $dara.Model.validateArray(this.recordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidParamter
   */
  code?: string;
  /**
   * @example
   * Parameter is null or invalid.
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  root?: ListInstanceRecordsResponseBodyRoot;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      root: ListInstanceRecordsResponseBodyRoot,
      success: 'boolean',
    };
  }

  validate() {
    if(this.root && typeof (this.root as any).validate === 'function') {
      (this.root as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

