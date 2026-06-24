// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveRuntimeModelTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code returned upon failure.
   * 
   * @example
   * Runtime.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned upon failure.
   * 
   * @example
   * 404
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned upon failure.
   * 
   * @example
   * The runtime is not found.
   */
  message?: string;
  /**
   * @remarks
   * The Agent runtime ID. The ID mapping is as follows:
   * 
   * - JVS Computer: JVS Computer ID, in the format of jvs-xxxx.
   * - OpenClaw: cloud computer ID, in the format of ecd-xxxx.
   * - Hermes Agent: Hermes Agent ID, in the format of jvs-xxxx.
   * 
   * @example
   * jvs-xxxxx
   */
  runtimeId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      runtimeId: 'RuntimeId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      runtimeId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveRuntimeModelTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of removal results.
   */
  data?: RemoveRuntimeModelTemplateResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': RemoveRuntimeModelTemplateResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
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

