// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMaliciousFileWhitelistConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the whitelist rule.
   * 
   * @example
   * 1
   */
  configId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

