// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudBatchCreateAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 成功创建的座席号
   * 
   * @example
   * 100,101,102,103
   */
  cnos?: string;
  /**
   * @remarks
   * 创建座席失败数量
   * 
   * @example
   * 0
   */
  fail?: string;
  /**
   * @remarks
   * 座席创建成功,绑定技能失败的数量
   * 
   * @example
   * 0
   */
  other?: string;
  /**
   * @remarks
   * 创建座席成功数量
   * 
   * @example
   * 4
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      cnos: 'Cnos',
      fail: 'Fail',
      other: 'Other',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnos: 'string',
      fail: 'string',
      other: 'string',
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

export class CloudBatchCreateAgentResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudBatchCreateAgentResponseBodyData;
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
      data: CloudBatchCreateAgentResponseBodyData,
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

