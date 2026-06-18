// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetBillDetailFileListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The billing month.
   * 
   * @example
   * 202502
   */
  billMonth?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * 账单202502021112
   */
  fileName?: string;
  /**
   * @remarks
   * The file URL.
   * 
   * @example
   * aps.ailyun.com/file/download?resourceId=1234&type=1
   */
  fileUrl?: string;
  /**
   * @remarks
   * The OSS file push status. Valid values:
   * - 1: pending
   * - 2: processing
   * - 3: completed.
   * 
   * @example
   * 3
   */
  status?: string;
  /**
   * @remarks
   * The type. Valid values: customer acquisition or channel expansion.
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
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetBillDetailFileListResponseBodyData[];
  /**
   * @remarks
   * The message.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * Same as Message.
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
   * Indicates whether the request was successful.
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

