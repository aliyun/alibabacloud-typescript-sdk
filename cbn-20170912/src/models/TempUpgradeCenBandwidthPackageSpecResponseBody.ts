// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TempUpgradeCenBandwidthPackageSpecResponseBody extends $dara.Model {
  /**
   * @example
   * DB0A026C-A8E5-40AB-977E-3A87DD78F694
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

