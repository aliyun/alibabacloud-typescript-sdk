// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkspaceResponseBodyFailReasons extends $dara.Model {
  /**
   * @remarks
   * The specific reason.
   * 
   * @example
   * API Key exists. Please clear them first.
   */
  reason?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * API Key
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of failure reasons.
   */
  failReasons?: DeleteWorkspaceResponseBodyFailReasons[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Indicates whether the workspace is successfully deleted. Valid values:
   * 
   * - true: Succeeded.
   * 
   * - false: Failed.
   * 
   * @example
   * true
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DFD55E7B-0615-5343-BDA0-FBEE86F29935
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - true: Succeeded.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      failReasons: 'failReasons',
      httpStatusCode: 'httpStatusCode',
      isDeleted: 'isDeleted',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failReasons: { 'type': 'array', 'itemType': DeleteWorkspaceResponseBodyFailReasons },
      httpStatusCode: 'number',
      isDeleted: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.failReasons)) {
      $dara.Model.validateArray(this.failReasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

