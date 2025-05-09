// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataExportOrderDetailResponseBodyDataExportOrderDetail } from "./GetDataExportOrderDetailResponseBodyDataExportOrderDetail";


export class GetDataExportOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the data export ticket.
   */
  dataExportOrderDetail?: GetDataExportOrderDetailResponseBodyDataExportOrderDetail;
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
   * The ID of the request.
   * 
   * @example
   * 427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataExportOrderDetail: 'DataExportOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataExportOrderDetail: GetDataExportOrderDetailResponseBodyDataExportOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataExportOrderDetail && typeof (this.dataExportOrderDetail as any).validate === 'function') {
      (this.dataExportOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

