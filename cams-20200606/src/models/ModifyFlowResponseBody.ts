// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The categories of the Flow.
   */
  categories?: string[];
  /**
   * @example
   * http://www.abc.com
   */
  endpointUri?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 3939399****
   */
  flowId?: string;
  /**
   * @remarks
   * The Flow name.
   * 
   * @example
   * flow-00203
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      endpointUri: 'EndpointUri',
      flowId: 'FlowId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      endpointUri: 'string',
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

export class ModifyFlowResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * If OK is returned, the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ModifyFlowResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1612C226-E271-4CFE-9F18-4066D******
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
      data: ModifyFlowResponseBodyData,
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

