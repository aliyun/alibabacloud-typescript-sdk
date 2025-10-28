// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process. You can call the GetChangeOrderInfo operation to query the details about the change process. For more information, see [GetChangeOrderInfo](https://help.aliyun.com/document_detail/62072.html).
   * 
   * @example
   * a9557bac-ddd7-*********************
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D16979DC-4D42-****************
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

