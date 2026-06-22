// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaliciousFileWhitelistConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the whitelist rule for agentless detection of sensitive file alerts. You can call [ListMaliciousFileWhitelistConfigs](~~ListMaliciousFileWhitelistConfigs~~) to obtain the ID.
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

