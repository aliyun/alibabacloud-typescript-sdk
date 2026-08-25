// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicyBindingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of data source IDs to dissociate from the policy.
   */
  dataSourceIdsShrink?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * po-000************hgp
   */
  policyId?: string;
  /**
   * @remarks
   * The data source type. Valid values:
   * 
   * - **UDM_ECS**: ECS instance backup.
   * - **OSS**: OSS backup.
   * - **NAS**: Alibaba Cloud NAS backup.
   * - **COMMON_NAS**: On-premises NAS backup.
   * - **ECS_FILE**: ECS File Backup Essential Edition.
   * - **File**: On-premises file backup.
   * - **COMMON_FILE_SYSTEM**: CPFS backup.
   * - **OTS**: Tablestore backup.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIdsShrink: 'DataSourceIds',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIdsShrink: 'string',
      policyId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

