// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  code?: string;
  /**
   * @example
   * null
   */
  data?: string;
  /**
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0CC8A9CB-9BA3-13FD-A404-6E2E7461881A
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      msg: 'string',
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

