// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetInstanceRecordConfigResponseBodyRoot extends $dara.Model {
  /**
   * @example
   * 7
   */
  expirationDays?: number;
  /**
   * @example
   * i-xxxx
   */
  instanceId?: string;
  /**
   * @example
   * 123
   */
  parentId?: string;
  /**
   * @example
   * acs:oss:cn-shanghai:123:workbench-record-123-1/record
   */
  recordStorageTarget?: string;
  static names(): { [key: string]: string } {
    return {
      expirationDays: 'ExpirationDays',
      instanceId: 'InstanceId',
      parentId: 'ParentId',
      recordStorageTarget: 'RecordStorageTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationDays: 'number',
      instanceId: 'string',
      parentId: 'string',
      recordStorageTarget: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRecordConfigResponseBody extends $dara.Model {
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
  root?: GetInstanceRecordConfigResponseBodyRoot;
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
      root: GetInstanceRecordConfigResponseBodyRoot,
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

