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
   * The value of the tag.
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
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Minimum value: 1. Maximum value: 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to query replication target vaults.
   * 
   * @example
   * true
   */
  replication?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-*********************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the backup vault. Valid values:
   * 
   * - **UNKNOWN**: unknown
   * - **INITIALIZING**: initializing
   * - **CREATED**: created
   * - **ERROR**: error
   * 
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * The tag information. A maximum of 20 tags are supported.
   * 
   * @example
   * 6a745bceffb042959b3b5206d6f12ad1
   */
  tag?: DescribeVaultsRequestTag[];
  /**
   * @remarks
   * The backup vault ID.
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
   * The ID of the account to which the backup vault belongs.
   * 
   * @example
   * 144******732
   */
  vaultOwnerId?: number;
  /**
   * @remarks
   * The region ID of the backup vault.
   * 
   * @example
   * cn-shanghai
   */
  vaultRegionId?: string;
  /**
   * @remarks
   * The type of the backup vault. Valid values.
   * 
   * @example
   * STANDARD
   */
  vaultType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      replication: 'Replication',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
      vaultId: 'VaultId',
      vaultName: 'VaultName',
      vaultOwnerId: 'VaultOwnerId',
      vaultRegionId: 'VaultRegionId',
      vaultType: 'VaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      replication: 'boolean',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVaultsRequestTag },
      vaultId: 'string',
      vaultName: 'string',
      vaultOwnerId: 'number',
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

