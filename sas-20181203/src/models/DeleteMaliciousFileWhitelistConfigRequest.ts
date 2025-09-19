// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaliciousFileWhitelistConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert whitelist rule of sensitive files that are detected by using the agentless detection feature. You can call the [ListMaliciousFileWhitelistConfigs](~~ListMaliciousFileWhitelistConfigs~~) operation to query the IDs of alert whitelist rules.
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

