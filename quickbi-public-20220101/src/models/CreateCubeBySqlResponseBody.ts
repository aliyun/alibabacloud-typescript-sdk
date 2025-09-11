// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCubeBySqlResponseBody extends $dara.Model {
  /**
   * @example
   * 05739b************02522b9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
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

