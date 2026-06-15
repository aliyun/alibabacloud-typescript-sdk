// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

