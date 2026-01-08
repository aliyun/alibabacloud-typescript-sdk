// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowNodeGroupResponseBodyDataModel extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * {}
   */
  publicExtend?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      publicExtend: 'PublicExtend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      publicExtend: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeGroupResponseBodyData extends $dara.Model {
  model?: ListFlowNodeGroupResponseBodyDataModel[];
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: { 'type': 'array', 'itemType': ListFlowNodeGroupResponseBodyDataModel },
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeGroupResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: number;
  data?: ListFlowNodeGroupResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      data: ListFlowNodeGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

