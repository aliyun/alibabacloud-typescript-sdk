// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListIvrsResponseBodyDataIvrs extends $dara.Model {
  /**
   * @remarks
   * 语音导航描述
   * 
   * @example
   * 示例值示例值
   */
  description?: string;
  /**
   * @remarks
   * 语音导航id
   * 
   * @example
   * 7
   */
  id?: number;
  /**
   * @remarks
   * 语音导航名称
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
      description: 'Description',
      id: 'Id',
      name: 'Name',
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
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

export class ClinkListIvrsResponseBodyData extends $dara.Model {
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
   * 语音导航列表
   */
  ivrs?: ClinkListIvrsResponseBodyDataIvrs[];
  static names(): { [key: string]: string } {
    return {
      clinkRequestId: 'ClinkRequestId',
      ivrs: 'Ivrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clinkRequestId: 'string',
      ivrs: { 'type': 'array', 'itemType': ClinkListIvrsResponseBodyDataIvrs },
    };
  }

  validate() {
    if(Array.isArray(this.ivrs)) {
      $dara.Model.validateArray(this.ivrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListIvrsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkListIvrsResponseBodyData;
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
      data: ClinkListIvrsResponseBodyData,
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

