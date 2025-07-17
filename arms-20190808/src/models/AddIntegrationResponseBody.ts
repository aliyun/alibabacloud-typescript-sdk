// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIntegrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. 200 means success, other status codes are exceptions.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The prompt information of the returned result.
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
   * 1A9C645C-C83F-4C9D-8CCB-29BEC9E1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
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

