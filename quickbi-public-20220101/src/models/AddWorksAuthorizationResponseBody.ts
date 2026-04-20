// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorksAuthorizationResponseBody extends $dara.Model {
  /**
   * @example
   * 78C1AA***************C462E57A95
   */
  requestId?: string;
  /**
   * @example
   * asdasf8****sda
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

