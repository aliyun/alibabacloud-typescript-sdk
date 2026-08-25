// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicyBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The list of data source IDs to dissociate from the policy.
   */
  dataSourceIds?: string[];
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
      dataSourceIds: 'DataSourceIds',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      policyId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceIds)) {
      $dara.Model.validateArray(this.dataSourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

