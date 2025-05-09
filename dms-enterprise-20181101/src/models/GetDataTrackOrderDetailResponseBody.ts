// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataTrackOrderDetailResponseBodyDataTrackOrderDetail } from "./GetDataTrackOrderDetailResponseBodyDataTrackOrderDetail";


export class GetDataTrackOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the ticket.
   */
  dataTrackOrderDetail?: GetDataTrackOrderDetailResponseBodyDataTrackOrderDetail;
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
   * 283C461F-11D8-48AA-B695-DF092DA32AF3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataTrackOrderDetail: 'DataTrackOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTrackOrderDetail: GetDataTrackOrderDetailResponseBodyDataTrackOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataTrackOrderDetail && typeof (this.dataTrackOrderDetail as any).validate === 'function') {
      (this.dataTrackOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

