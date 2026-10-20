// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableFromAuthorizedOssResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current table status. After upload, the status typically changes to TO_IMPORT, indicating the system has received the uploaded file and is waiting to schedule the write to the data table.
   * 
   * @example
   * TO_IMPORT
   */
  status?: string;
  /**
   * @remarks
   * The table ID, which is the same as the input parameter TableId.
   * 
   * @example
   * table_df96ebd5da8640e5a0991b3d15f39d4d_12792097
   */
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      tableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableFromAuthorizedOssResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error status code.
   * 
   * @example
   * DataCenter.FileTooLarge
   */
  code?: string;
  /**
   * @remarks
   * The data field returned by the operation.
   */
  data?: UpdateTableFromAuthorizedOssResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7BA8ADD9-53D6-53F0-918F-A1E776AD230E
   */
  requestId?: string;
  /**
   * @remarks
   * The status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateTableFromAuthorizedOssResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

