// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVaultsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The Value of the tag.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-*********************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the backup vault. Valid values:
   * 
   * *   **UNKNOWN**: The backup vault is in an unknown state.
   * *   **INITIALIZING**: The backup vault is being initialized.
   * *   **CREATED**: The backup vault is created.
   * *   **ERROR**: An error occurs on the backup vault.
   * 
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * Tag information. Supports up to 20 tags.
   * 
   * @example
   * 6a745bceffb042959b3b5206d6f12ad1
   */
  tag?: DescribeVaultsRequestTag[];
  /**
   * @remarks
   * Backup vault ID.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  /**
   * @remarks
   * The name of the backup vault. The name must be 1 to 64 characters in length.
   * 
   * @example
   * vaultname
   */
  vaultName?: string;
  /**
   * @remarks
   * The region ID to which the backup vault belongs.
   * 
   * @example
   * cn-shanghai
   */
  vaultRegionId?: string;
  /**
   * @remarks
   * Backup repository type. The values are as follows: 
   * - **STANDARD**: Represents a standard repository, which can be used for ECS file backups, OSS backups, NAS backups, etc. 
   * - **OTS_BACKUP**: Represents a TableStore repository, which is only used for TableStore backups, and TableStore must use this type of repository.
   * 
   * @example
   * STANDARD
   */
  vaultType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
      vaultId: 'VaultId',
      vaultName: 'VaultName',
      vaultRegionId: 'VaultRegionId',
      vaultType: 'VaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVaultsRequestTag },
      vaultId: 'string',
      vaultName: 'string',
      vaultRegionId: 'string',
      vaultType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

