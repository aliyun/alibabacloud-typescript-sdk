// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetBillDetailFileListResponseBodyData } from "./GetBillDetailFileListResponseBodyData";


export class GetBillDetailFileListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetBillDetailFileListResponseBodyData[];
  message?: string;
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

