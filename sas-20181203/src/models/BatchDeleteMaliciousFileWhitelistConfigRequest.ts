// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteMaliciousFileWhitelistConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the whitelist rules. You can call the [ListMaliciousFileWhitelistConfigs](~~ListMaliciousFileWhitelistConfigs~~) operation to query the IDs of whitelist rules.
   */
  configIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      configIdList: 'ConfigIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.configIdList)) {
      $dara.Model.validateArray(this.configIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

