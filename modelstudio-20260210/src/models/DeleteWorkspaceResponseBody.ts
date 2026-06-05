// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkspaceResponseBodyFailReasons extends $dara.Model {
  /**
   * @example
   * API Key exists. Please clear them first.
   */
  reason?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  failReasons?: DeleteWorkspaceResponseBodyFailReasons[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * true
   */
  isDeleted?: boolean;
  /**
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

