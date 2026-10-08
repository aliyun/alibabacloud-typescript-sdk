// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the change flow.
   * 
   * @example
   * 0b8e3c0b-5818-430*************
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The status of the call or a POP error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Additional information.
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
   * 34DFE9FDV****************
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

