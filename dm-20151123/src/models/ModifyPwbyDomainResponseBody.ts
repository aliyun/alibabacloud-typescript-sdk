// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPWByDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 02B2A890-CBD8-4806-9BCA-C93190CE7EF6
   */
  requestId?: string;
  /**
   * @remarks
   * Whether it was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

