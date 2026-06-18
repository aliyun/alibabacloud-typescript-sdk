// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableFromAuthorizedOssResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Current table status. After upload, the status usually changes to TO_IMPORT. This means the system has accepted the uploaded file and is waiting to schedule it into the data table.
   * 
   * @example
   * TO_IMPORT
   */
  status?: string;
  /**
   * @remarks
   * Same as the input TableId parameter.
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
   * Error status code.
   * 
   * @example
   * DataCenter.FileTooLarge
   */
  code?: string;
  /**
   * @remarks
   * Data field of the response.
   */
  data?: UpdateTableFromAuthorizedOssResponseBodyData;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 7BA8ADD9-53D6-53F0-918F-A1E776AD230E
   */
  requestId?: string;
  /**
   * @remarks
   * Status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded.
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

