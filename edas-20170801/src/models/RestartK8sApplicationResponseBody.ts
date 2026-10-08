// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartK8sApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process for this operation.
   * 
   * @example
   * *********-ed2ae98de18d
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The status of the API call or a POP error code.
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
   * 03FD1520-0FD6-436A-****-265318D7****
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

