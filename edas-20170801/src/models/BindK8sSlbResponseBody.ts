// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindK8sSlbResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process.
   * 
   * @example
   * b4b37bde-a125-****-****-741f7f4a9ae3
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
   * 4823-bhjf-23u4-****
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

