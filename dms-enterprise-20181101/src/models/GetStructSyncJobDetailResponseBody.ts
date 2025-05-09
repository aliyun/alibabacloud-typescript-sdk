// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStructSyncJobDetailResponseBodyStructSyncJobDetail } from "./GetStructSyncJobDetailResponseBodyStructSyncJobDetail";


export class GetStructSyncJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48602B78-0DDF-414C-8688-70CAB6070115
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the schema synchronization task.
   */
  structSyncJobDetail?: GetStructSyncJobDetailResponseBodyStructSyncJobDetail;
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
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      structSyncJobDetail: 'StructSyncJobDetail',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      structSyncJobDetail: GetStructSyncJobDetailResponseBodyStructSyncJobDetail,
      success: 'boolean',
    };
  }

  validate() {
    if(this.structSyncJobDetail && typeof (this.structSyncJobDetail as any).validate === 'function') {
      (this.structSyncJobDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

