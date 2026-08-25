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
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1************dtv
   */
  dataSourceId?: string;
  /**
   * @remarks
   * Specifies whether the policy is suspended for the data source.
   * - true: Suspended.
   * - false: Not suspended.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **ECS_FILE**, **File**, **NAS**, **COMMON_NAS**, or **COMMON_FILE_SYSTEM**. Specifies the file types to back up. All files of these types are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * [\\"*.doc\\",\\"*.xltm\\"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **ECS_FILE**, **File**, **NAS**, **COMMON_NAS**, or **COMMON_FILE_SYSTEM**. Specifies the file types to back up. All files of these types are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * [\\"*.doc\\",\\"*.xltm\\"]
   */
  include?: string;
  /**
   * @remarks
   * The description of the policy binding.
   * 
   * @example
   * po-000************5xx-i-2ze************nw4
   */
  policyBindingDescription?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * po-000************ky9
   */
  policyId?: string;
  /**
   * @remarks
   * The meaning varies depending on the SourceType value:
   * - **OSS**: The prefix to back up. If not specified, the entire root directory of the bucket is backed up. Only a single prefix is supported. To back up /backup, set this parameter to /backup.
   * - **ECS_FILE**: The file directories to back up. If not specified, all directories are backed up. Multiple directories are supported. To back up files in /a and /b, set this parameter to ["/a", "/b"].
   * - **File**: The file directories to back up. If not specified, all directories are backed up. Multiple directories are supported. To back up files in /a and /b, set this parameter to ["/a", "/b"].
   * - **COMMON_FILE_SYSTEM**: Required. The source paths to back up. Multiple paths are supported. To back up /a and /b, set this parameter to ["/a", "/b"]. To back up the root path, set this parameter to ["/"].
   * - **COMMON_NAS**: Required. The source path to back up. Only a single path is supported. To back up /a, set this parameter to ["/a"]. To back up the root path, set this parameter to ["/"].
   * - **OTS**: The list of data tables to back up. If not specified, all data tables are backed up. Multiple data tables are supported. To back up data tables a and b, set this parameter to ["a", "b"].
   * 
   * @example
   * backup/
   */
  source?: string;
  /**
   * @remarks
   * The data source type. Valid values:
   * - **UDM_ECS**: ECS instance backup.
   * - **OSS**: OSS backup.
   * - **NAS**: Alibaba Cloud NAS backup.
   * - **COMMON_NAS**: On-premises NAS backup.
   * - **ECS_FILE**: ECS File Backup Essential Edition.
   * - **File**: On-premises file backup.
   * - **COMMON_FILE_SYSTEM**: CPFS backup.
   * - **OTS**: Tablestore backup.
   * 
   * This parameter is required.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE** or **File**. Specifies the backup traffic control. The format is `{start}{end}{bandwidth}`. Multiple traffic control configurations are separated by delimiters, and the time ranges cannot overlap.
   * 
   * - **start**: The start hour.
   * - **end**: The end hour.
   * - **bandwidth**: The rate limit, in KB/s.
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

