// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudImportTaskTelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 批次Id
   * 
   * @example
   * 0
   */
  fileId?: string;
  /**
   * @remarks
   * 请求号码总数
   * 
   * @example
   * 30
   */
  importTotal?: string;
  /**
   * @remarks
   * 非法号码数
   * 
   * @example
   * 0
   */
  invalidTotal?: string;
  /**
   * @remarks
   * 成功导入号码数
   * 
   * @example
   * 30
   */
  successTotal?: string;
  /**
   * @remarks
   * 任务Id
   * 
   * @example
   * 13322333
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      importTotal: 'ImportTotal',
      invalidTotal: 'InvalidTotal',
      successTotal: 'SuccessTotal',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      importTotal: 'string',
      invalidTotal: 'string',
      successTotal: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudImportTaskTelResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudImportTaskTelResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudImportTaskTelResponseBodyData,
      message: 'string',
      requestId: 'string',
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

