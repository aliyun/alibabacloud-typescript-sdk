// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListEnterprisePausesResponseBodyDataEnterprisePauses extends $dara.Model {
  /**
   * @remarks
   * 置忙状态Id
   * 
   * @example
   * 14
   */
  id?: number;
  /**
   * @remarks
   * 默认状态，0：不是；1：是
   * 
   * @example
   * 0
   */
  isDefault?: number;
  /**
   * @remarks
   * 休息状态，0：不是；1：是
   * 
   * @example
   * 0
   */
  isRest?: string;
  /**
   * @remarks
   * 置忙状态描述
   * 
   * @example
   * 示例值
   */
  pauseStatus?: string;
  /**
   * @remarks
   * 优先级，数字越小优先级越高
   * 
   * @example
   * 8
   */
  sort?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isDefault: 'IsDefault',
      isRest: 'IsRest',
      pauseStatus: 'PauseStatus',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      isDefault: 'number',
      isRest: 'string',
      pauseStatus: 'string',
      sort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListEnterprisePausesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * xxx
   */
  clinkRequestId?: string;
  /**
   * @remarks
   * 企业置忙状态列表
   */
  enterprisePauses?: ClinkListEnterprisePausesResponseBodyDataEnterprisePauses[];
  static names(): { [key: string]: string } {
    return {
      clinkRequestId: 'ClinkRequestId',
      enterprisePauses: 'EnterprisePauses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clinkRequestId: 'string',
      enterprisePauses: { 'type': 'array', 'itemType': ClinkListEnterprisePausesResponseBodyDataEnterprisePauses },
    };
  }

  validate() {
    if(Array.isArray(this.enterprisePauses)) {
      $dara.Model.validateArray(this.enterprisePauses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListEnterprisePausesResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkListEnterprisePausesResponseBodyData;
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
      data: ClinkListEnterprisePausesResponseBodyData,
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

