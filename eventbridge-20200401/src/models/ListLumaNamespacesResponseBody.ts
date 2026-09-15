// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Namespace } from "./Namespace";


export class ListLumaNamespacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of namespaces bound to the Agent.
   * 
   * @example
   * [{"Name":"my_namespace"}]
   */
  namespaces?: Namespace[];
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': Namespace },
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

export class ListLumaNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates a successful call. A specific error code is returned upon failure.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The list of namespaces bound to the Agent. All results are returned at once without pagination.
   */
  data?: ListLumaNamespacesResponseBodyData;
  /**
   * @remarks
   * The message returned by the operation. The value is Operation success when the call succeeds, or a specific error description when the call fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, used for troubleshooting and ticket feedback.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates success.
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
      data: ListLumaNamespacesResponseBodyData,
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

