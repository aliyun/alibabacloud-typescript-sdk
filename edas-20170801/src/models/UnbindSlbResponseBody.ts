// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindSlbResponseBody extends $dara.Model {
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
   * This parameter is left empty. It has no meaning.
   * 
   * @example
   * {}
   */
  data?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Unbind slb success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D16979DC-4D42-************
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

