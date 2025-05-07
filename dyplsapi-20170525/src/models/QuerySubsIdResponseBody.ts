// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySubsIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7F99446-8191-43C0-99B5-F58A6AEAD779
   */
  requestId?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * 11111111****
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      subsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

