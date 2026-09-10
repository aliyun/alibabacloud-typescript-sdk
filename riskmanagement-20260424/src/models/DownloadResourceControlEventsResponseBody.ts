// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadResourceControlEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > 200 indicates success. Other values (such as 500 or 400) indicate error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The metadata response information.
   * 
   * @example
   * 5
   */
  data?: string;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 855FCC89-0B13-5FC0-AAD2-120878081C1C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: The call was successful.                                
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

