// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCheckScopeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON string of the automatic scan configuration. The following fields are included:
   * 
   * - **autoInclude**: specifies whether to enable automatic scanning. Valid values: **true**: enabled. **false**: disabled.
   * - **autoRule**: the configuration for enabling automatic scanning.
   * - **ruleOperator**: the rule operator for the configuration. Set the value to **include**.
   * - **operator**: the logical operator. Set the value to **or**.
   * - **rule**: the rule.
   * - **condition**: the rule condition. Valid values: **vendor**: vendor, **assetType**: primary asset type, **assetSubType**: secondary asset type.
   * > For specific meanings, refer to the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation.
   * 
   * This parameter is required when AutoType is set to 1 (automatic scan enabled). Provide a valid JSON configuration string. This parameter is not required when AutoType is set to 0.
   * 
   * @example
   * "{\\"autoInclude\\":true,\\"autoRule\\":{\\"ruleOperator\\":\\"include\\",\\"operator\\":\\"or\\",\\"rule\\":[{\\"condition\\":\\"assetSubType\\",\\"ruleOperator\\":\\"include\\",\\"value\\":[{\\"vendor\\":\\"0\\",\\"assetType\\":\\"0\\",\\"assetSubType\\":\\"100\\"}]}]}}"
   */
  autoConfig?: string;
  /**
   * @remarks
   * The type of the automatic scan configuration. Valid values:
   * - **0**: Automatic scan is disabled.
   * - **1**: Automatically scan newly added cloud assets.
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
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that corresponds to the member accounts in the resource folder.
   * >Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The type of the scan scope configuration. Valid values:
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

