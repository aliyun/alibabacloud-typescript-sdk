// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNamespaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The region to which the namespace belongs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryNamespaceResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  message?: string;
  /**
   * @example
   * abcde-fg
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryNamespaceResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

