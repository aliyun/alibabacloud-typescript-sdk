// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudBatchUpdateAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席配置信息修改失败的座席工号列表
   * 
   * @example
   * null
   */
  fail?: string;
  /**
   * @remarks
   * 座席配置信息修改成功数量
   * 
   * @example
   * 3
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      fail: 'Fail',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fail: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudBatchUpdateAgentResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudBatchUpdateAgentResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A78E2
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
      data: CloudBatchUpdateAgentResponseBodyData,
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

