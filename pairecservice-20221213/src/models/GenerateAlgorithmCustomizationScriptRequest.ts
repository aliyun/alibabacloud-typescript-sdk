// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAlgorithmCustomizationScriptRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate a deployment script or perform one-click deployment. Valid values:
   * - EasyDeploy: one-click deployment
   * - GenerateScript: script generation
   * 
   * @example
   * EasyDeploy
   */
  deployMode?: string;
  /**
   * @remarks
   * The instance ID. For information about how to obtain the instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * @example
   * pairec-test-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The types of fields in the JSON configuration.
   * 
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

