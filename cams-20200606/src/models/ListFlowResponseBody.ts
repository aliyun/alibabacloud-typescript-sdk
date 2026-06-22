// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The categories.
   */
  categories?: string[];
  /**
   * @remarks
   * The flow ID.
   * 
   * @example
   * 92675332812643****
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * @example
   * flow-02020
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      flowId: 'FlowId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      flowId: 'string',
      flowName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data object.
   */
  data?: ListFlowResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1612C226-E271-4CFE-9F18-4066D550F91B
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
      data: { 'type': 'array', 'itemType': ListFlowResponseBodyData },
      message: 'string',
      requestId: 'string',
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

