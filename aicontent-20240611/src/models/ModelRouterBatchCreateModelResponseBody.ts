// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelDTO } from "./ModelDto";
import { BatchModelErrorDTO } from "./BatchModelErrorDto";


export class ModelRouterBatchCreateModelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of models that were successfully created.
   * 
   * @example
   * []
   */
  created?: ModelDTO[];
  /**
   * @remarks
   * The number of models that failed or were skipped.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The list of models that failed or were skipped.
   * 
   * @example
   * []
   */
  failures?: BatchModelErrorDTO[];
  /**
   * @remarks
   * The number of models that were successfully created.
   * 
   * @example
   * 3
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      failCount: 'failCount',
      failures: 'failures',
      successCount: 'successCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: { 'type': 'array', 'itemType': ModelDTO },
      failCount: 'number',
      failures: { 'type': 'array', 'itemType': BatchModelErrorDTO },
      successCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.created)) {
      $dara.Model.validateArray(this.created);
    }
    if(Array.isArray(this.failures)) {
      $dara.Model.validateArray(this.failures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterBatchCreateModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   * 
   * @example
   * {}
   */
  data?: ModelRouterBatchCreateModelResponseBodyData;
  /**
   * @remarks
   * The fault code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Unknown error
   */
  errMessage?: string;
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
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModelRouterBatchCreateModelResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

