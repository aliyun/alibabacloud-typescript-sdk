// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeAgSecurityMobileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mpk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  securityMobile?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      mpk: 'Mpk',
      pk: 'Pk',
      securityMobile: 'SecurityMobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      mpk: 'string',
      pk: 'string',
      securityMobile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

