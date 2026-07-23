// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAlgorithmCustomizationScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment mode. Valid values:
   * 
   * - **EasyDeploy**: Performs a one-click deployment.
   * 
   * - **GenerateScript**: Generates a deployment script.
   * 
   * @example
   * EasyDeploy
   */
  deployMode?: string;
  /**
   * @remarks
   * The ID of the instance. To obtain this ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * @example
   * pairec-test-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The data types of fields in the JSON configuration.
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

