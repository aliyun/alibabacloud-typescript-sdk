// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutExporterOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > The value 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A5F022D-AC7C-460E-94AE-B9E75083D027
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. The value true indicates that the call was successful. The value false indicates that the call failed.
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

