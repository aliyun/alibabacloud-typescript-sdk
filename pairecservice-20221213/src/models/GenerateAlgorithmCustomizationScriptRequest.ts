// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAlgorithmCustomizationScriptRequest extends $dara.Model {
  /**
   * @example
   * EasyDeploy
   */
  deployMode?: string;
  /**
   * @example
   * pairec-test-xxx
   */
  instanceId?: string;
  /**
   * @example
   * {"item_table":"array"}
   */
  moduleFieldTypes?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      deployMode: 'DeployMode',
      instanceId: 'InstanceId',
      moduleFieldTypes: 'ModuleFieldTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMode: 'string',
      instanceId: 'string',
      moduleFieldTypes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.moduleFieldTypes) {
      $dara.Model.validateMap(this.moduleFieldTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

