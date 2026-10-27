// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaliciousFileWhitelistConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the whitelist rule for sensitive file alerts in agentless detection. You can call the [ListMaliciousFileWhitelistConfigs](~~ListMaliciousFileWhitelistConfigs~~) operation to obtain the ID of the whitelist rule for sensitive files.
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

