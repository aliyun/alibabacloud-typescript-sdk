// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebuildSandboxResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The target instance incarnation for this rebuild. A rebuild increases the incarnation. The returned value only indicates that the request is accepted and does not indicate that the new instance is ready.
   * 
   * @example
   * 2
   */
  incarnation?: number;
  /**
   * @remarks
   * The ID of the initial rebuild task. Use the operationId returned by RebuildSandbox. Always use this ID to query the overall result. You do not need to use the IDs of subsequently created tasks.
   * 
   * @example
   * 01a1be92-7fa4-76b2-a871-b376d6d0****
   */
  operationId?: string;
  /**
   * @remarks
   * The logical sandbox ID that corresponds to this rebuild. The logical ID remains unchanged after the rebuild.
   * 
   * @example
   * 01a1b56a-b00f-7aa3-bacf-cc9d04b0****
   */
  sandboxId?: string;
  static names(): { [key: string]: string } {
    return {
      incarnation: 'incarnation',
      operationId: 'operationId',
      sandboxId: 'sandboxId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incarnation: 'number',
      operationId: 'string',
      sandboxId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildSandboxResponseBody extends $dara.Model {
  /**
   * @remarks
   * Task result code of the API request. A successful request returns SUCCESS. Query task result of the asynchronous task separately.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The acceptance result of the rebuild request.
   */
  data?: RebuildSandboxResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the API request.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The result description of the API request. This does not indicate that the asynchronous rebuild task is complete.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. You can use the request ID to locate the API call.
   * 
   * @example
   * 01A1BE93-46A7-1A2A-BD62-159FCDAA****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. A value of true does not indicate that the sandbox rebuild is complete.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RebuildSandboxResponseBodyData,
      httpStatusCode: 'number',
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

