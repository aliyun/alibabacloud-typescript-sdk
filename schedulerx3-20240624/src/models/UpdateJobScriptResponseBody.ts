// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobScriptResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * not support update script, please upgrade engine version to 2.2.2+
   */
  message?: string;
  /**
   * @example
   * 29ED6209-5DE6-5E1D-89B0-B7B1D823A1BF
   */
  requestId?: string;
  /**
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
      code: 'number',
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

