// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageLoginResponseBodyLoginInfo extends $dara.Model {
  adbLoginPort?: number;
  /**
   * @example
   * 12.10.4.10
   */
  loginHostname?: string;
  /**
   * @example
   * 10004
   */
  loginPort?: number;
  static names(): { [key: string]: string } {
    return {
      adbLoginPort: 'AdbLoginPort',
      loginHostname: 'LoginHostname',
      loginPort: 'LoginPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbLoginPort: 'number',
      loginHostname: 'string',
      loginPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

