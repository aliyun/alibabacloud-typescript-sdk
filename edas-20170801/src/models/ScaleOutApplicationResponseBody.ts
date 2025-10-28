// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleOutApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process. You can call the GetChangeOrderInfo operation to query the progress of this scale-out. For more information, see [GetChangeOrderInfo](https://help.aliyun.com/document_detail/62072.html).
   * 
   * @example
   * f4208118-7171-4e20-92************
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
   * D16979DC-4D42-***********************
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

