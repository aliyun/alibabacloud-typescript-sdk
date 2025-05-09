// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataCorrectTaskDetailResponseBodyDataCorrectTaskDetail } from "./GetDataCorrectTaskDetailResponseBodyDataCorrectTaskDetail";


export class GetDataCorrectTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data change task.
   */
  dataCorrectTaskDetail?: GetDataCorrectTaskDetailResponseBodyDataCorrectTaskDetail;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B5FD0BC8-2D90-4478-B8EC-A0E92E0B1773
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
      dataCorrectTaskDetail: 'DataCorrectTaskDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCorrectTaskDetail: GetDataCorrectTaskDetailResponseBodyDataCorrectTaskDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataCorrectTaskDetail && typeof (this.dataCorrectTaskDetail as any).validate === 'function') {
      (this.dataCorrectTaskDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

