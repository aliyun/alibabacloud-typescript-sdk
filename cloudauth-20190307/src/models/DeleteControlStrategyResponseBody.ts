// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteControlStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code, **200** indicates successful API response.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   * 
   * @example
   * 1
   */
  data?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * D6C1237B-D34B-5126-93AC-36A4B9E819C6
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the response was successful.
   * 
   * @example
   * True
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
      data: 'number',
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

