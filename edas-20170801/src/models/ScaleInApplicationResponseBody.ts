// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleInApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process for this operation. You can call the GetChangeOrderInfo operation to query the progress of this scale-in. For more information, see [GetChangeOrderInfo](https://help.aliyun.com/document_detail/62072.html). No ID is generated if the ForceStatus parameter is set to true. You can check whether the request is successful based on the value of the Code parameter.
   * 
   * @example
   * ddf5a4c7-a507-4a6e****************
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
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

