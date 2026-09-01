// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCheckScopeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic scan configuration as a JSON string. The following fields are included:
   * 
   * - **autoInclude**: specifies whether to enable automatic scan. Valid values: **true**: enabled. **false**: disabled.
   * - **autoRule**: the enablement configuration.
   * - **ruleOperator**: the enablement configuration rule. Set the value to **include**.
   * - **operator**: the logical operator. Set the value to **or**.
   * - **rule**: the rule.
   * - **condition**: the rule condition. Valid values: **vendor**: vendor. **assetType**: level-1 asset type. **assetSubType**: level-2 asset type.
   * > For more information, refer to the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation.
   * 
   * @example
   * "{\\"autoInclude\\":true,\\"autoRule\\":{\\"ruleOperator\\":\\"include\\",\\"operator\\":\\"or\\",\\"rule\\":[{\\"condition\\":\\"assetSubType\\",\\"ruleOperator\\":\\"include\\",\\"value\\":[{\\"vendor\\":\\"0\\",\\"assetType\\":\\"0\\",\\"assetSubType\\":\\"100\\"}]}]}}"
   */
  autoConfig?: string;
  /**
   * @remarks
   * The automatic scan configuration type. Valid values:
   * - **0**: disable automatic scan
   * - **1**: automatically scan newly added cloud assets
   * 
   * @example
   * 1
   */
  autoType?: number;
  /**
   * @remarks
   * The ID of the configuration.
   * >Call the [GetCheckScopeConfig](~~GetCheckScopeConfig~~) operation to obtain this parameter.
   * 
   * @example
   * 00cfa8161da093089e6804ba6a33****
   */
  configId?: string;
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The scan scope configuration type. Valid values:
   * - **1**: scan by instance
   * - **3**: scan all
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      autoConfig: 'AutoConfig',
      autoType: 'AutoType',
      configId: 'ConfigId',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoConfig: 'string',
      autoType: 'number',
      configId: 'string',
      resourceDirectoryAccountId: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

