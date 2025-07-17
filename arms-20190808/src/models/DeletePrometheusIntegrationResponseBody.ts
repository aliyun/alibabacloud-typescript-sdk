// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePrometheusIntegrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful. If another status code is returned, the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * success or an error message.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 19F54318-CC92-5567-BF66-CB029EC44C84
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

