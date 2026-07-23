// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Namespace } from "./Namespace";


export class ListNamespacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Namespace list
   */
  namespaces?: Namespace[];
  /**
   * @remarks
   * Next page token
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': Namespace },
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code. 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response data
   */
  data?: ListNamespacesResponseBodyData;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListNamespacesResponseBodyData,
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

