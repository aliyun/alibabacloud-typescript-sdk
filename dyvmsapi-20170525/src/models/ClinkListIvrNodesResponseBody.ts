// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListIvrNodesResponseBodyDataIvrNodes extends $dara.Model {
  /**
   * @remarks
   * 语音导航节点
   * 
   * @example
   * E91_rp0D1
   */
  endpoint?: string;
  /**
   * @remarks
   * 语音导航常用节点
   * 
   * @example
   * null
   */
  frequentlyPath?: string;
  /**
   * @remarks
   * 语音导航节点id
   * 
   * @example
   * 7
   */
  id?: number;
  /**
   * @remarks
   * 语音导航id
   * 
   * @example
   * 53
   */
  ivrId?: number;
  /**
   * @remarks
   * 语音导航节点名称
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * 是否开启节点统计，0：不开启；1：开启
   * 
   * @example
   * 0
   */
  statistic?: number;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      frequentlyPath: 'FrequentlyPath',
      id: 'Id',
      ivrId: 'IvrId',
      name: 'Name',
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      frequentlyPath: 'string',
      id: 'number',
      ivrId: 'number',
      name: 'string',
      statistic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListIvrNodesResponseBodyData extends $dara.Model {
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
   * 语音导航节点列表
   */
  ivrNodes?: ClinkListIvrNodesResponseBodyDataIvrNodes[];
  static names(): { [key: string]: string } {
    return {
      clinkRequestId: 'ClinkRequestId',
      ivrNodes: 'IvrNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clinkRequestId: 'string',
      ivrNodes: { 'type': 'array', 'itemType': ClinkListIvrNodesResponseBodyDataIvrNodes },
    };
  }

  validate() {
    if(Array.isArray(this.ivrNodes)) {
      $dara.Model.validateArray(this.ivrNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListIvrNodesResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkListIvrNodesResponseBodyData;
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
      data: ClinkListIvrNodesResponseBodyData,
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

