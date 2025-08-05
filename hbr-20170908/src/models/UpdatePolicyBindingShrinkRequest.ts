// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolicyBindingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced options.
   */
  advancedOptionsShrink?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1************dtv
   */
  dataSourceId?: string;
  /**
   * @remarks
   * Specifies whether to disable the backup policy for the data source. Valid values:
   * 
   * *   true: disables the backup policy for the data source
   * *   false: enables the backup policy for the data source
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **ECS_FILE** or **File**. This parameter specifies the type of files that do not need to be backed up. No files of the specified type are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * [\\"*.doc\\",\\"*.xltm\\"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **ECS_FILE** or **File**. This parameter specifies the type of files to be backed up. All files of the specified type are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * [\\"*.doc\\",\\"*.xltm\\"]
   */
  include?: string;
  /**
   * @remarks
   * The description of the association.
   * 
   * @example
   * po-000************5xx-i-2ze************nw4
   */
  policyBindingDescription?: string;
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * This parameter is required.
   * 
   * @example
   * po-000************ky9
   */
  policyId?: string;
  /**
   * @remarks
   * *   If the SourceType parameter is set to **OSS**, set the Source parameter to the prefix of the path to the folder that you want to back up. If you do not specify the Source parameter, the entire bucket (root directory) is backed up.
   * *   If the SourceType parameter is set to **ECS_FILE** or **File**, set the Source parameter to the path to the files that you want to back up. If you do not specify the Source parameter, all paths backed up.
   * 
   * @example
   * backup/
   */
  source?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: ECS instance backup
   * 
   * This parameter is required.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **ECS_FILE** or **File**. This parameter specifies the throttling rules. Format: `{start}{end}{bandwidth}`. Separate multiple throttling rules with vertical bars (|). The time ranges of the throttling rules cannot overlap.
   * 
   * *   **start**: the start hour.
   * *   **end**: the end hour.
   * *   **bandwidth**: the bandwidth. Unit: KB/s.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  static names(): { [key: string]: string } {
    return {
      advancedOptionsShrink: 'AdvancedOptions',
      dataSourceId: 'DataSourceId',
      disabled: 'Disabled',
      exclude: 'Exclude',
      include: 'Include',
      policyBindingDescription: 'PolicyBindingDescription',
      policyId: 'PolicyId',
      source: 'Source',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedOptionsShrink: 'string',
      dataSourceId: 'string',
      disabled: 'boolean',
      exclude: 'string',
      include: 'string',
      policyBindingDescription: 'string',
      policyId: 'string',
      source: 'string',
      sourceType: 'string',
      speedLimit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

