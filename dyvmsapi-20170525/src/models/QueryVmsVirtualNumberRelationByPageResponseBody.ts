// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVmsVirtualNumberRelationByPageResponseBodyModelData extends $dara.Model {
  /**
   * @remarks
   * 号码归属地--城市
   * 
   * @example
   * 示例值示例值
   */
  numberCity?: string;
  /**
   * @remarks
   * 号码归属地--省
   * 
   * @example
   * 示例值示例值
   */
  numberProvince?: string;
  /**
   * @remarks
   * 真实号码
   * 
   * @example
   * 131****1234
   */
  realNumber?: string;
  /**
   * @remarks
   * 状态 1:有效；0:无效；-1:注销
   * 
   * @example
   * 1
   */
  state?: number;
  /**
   * @remarks
   * 虚拟号码
   * 
   * @example
   * 0571***1234
   */
  virtualNumber?: string;
  static names(): { [key: string]: string } {
    return {
      numberCity: 'NumberCity',
      numberProvince: 'NumberProvince',
      realNumber: 'RealNumber',
      state: 'State',
      virtualNumber: 'VirtualNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numberCity: 'string',
      numberProvince: 'string',
      realNumber: 'string',
      state: 'number',
      virtualNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVmsVirtualNumberRelationByPageResponseBodyModel extends $dara.Model {
  data?: QueryVmsVirtualNumberRelationByPageResponseBodyModelData[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 65
   */
  pageSize?: number;
  /**
   * @example
   * 231
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryVmsVirtualNumberRelationByPageResponseBodyModelData },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVmsVirtualNumberRelationByPageResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: QueryVmsVirtualNumberRelationByPageResponseBodyModel;
  /**
   * @example
   * 01A58FA5-422C-58E0-AA71-B307A665416F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: QueryVmsVirtualNumberRelationByPageResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

