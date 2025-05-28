// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDataLevelPermissionExtraConfigResponseBody extends $dara.Model {
  /**
   * @example
   * B70E1FBD-E533-52F2-A7A1-E02B92F78DDF
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
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
      result: 'boolean',
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

