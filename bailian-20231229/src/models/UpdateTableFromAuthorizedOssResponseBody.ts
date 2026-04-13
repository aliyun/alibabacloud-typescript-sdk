// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableFromAuthorizedOssResponseBodyData extends $dara.Model {
  /**
   * @example
   * TO_IMPORT
   */
  status?: string;
  /**
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
   * @example
   * DataCenter.FileTooLarge
   */
  code?: string;
  data?: UpdateTableFromAuthorizedOssResponseBodyData;
  /**
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
   * @example
   * 200
   */
  status?: string;
  /**
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

