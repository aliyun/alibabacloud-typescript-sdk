// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetBillDetailFileListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Month
   * 
   * @example
   * 202502
   */
  billMonth?: string;
  /**
   * @remarks
   * File Name
   * 
   * @example
   * 账单202502021112
   */
  fileName?: string;
  /**
   * @remarks
   * File URL
   * 
   * @example
   * aps.ailyun.com/file/download?resourceId=1234&type=1
   */
  fileUrl?: string;
  /**
   * @remarks
   * OSS file push status. 1: Pending, 2: Processing, 3: Succeeded
   * 
   * @example
   * 3
   */
  status?: string;
  /**
   * @remarks
   * Type: customer acquisition, channel expansion
   * 
   * @example
   * 拓渠
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      billMonth: 'BillMonth',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
      fileName: 'string',
      fileUrl: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillDetailFileListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   */
  data?: GetBillDetailFileListResponseBodyData[];
  /**
   * @remarks
   * Prompt message
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * Same as message
   * 
   * @example
   * 成功
   */
  msg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 210bc4b416874189683843905d9f9a
   */
  requestId?: string;
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetBillDetailFileListResponseBodyData },
      message: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

