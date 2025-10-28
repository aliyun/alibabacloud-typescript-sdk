// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The change process ID. You can call the GetChangeOrderInfo operation to query the progress of this rollback. For more information, see [GetChangeOrderInfo](https://help.aliyun.com/document_detail/423155.html).
   * 
   * @example
   * 921026b8-d1be-************
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D16979DC-4D42-*********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

