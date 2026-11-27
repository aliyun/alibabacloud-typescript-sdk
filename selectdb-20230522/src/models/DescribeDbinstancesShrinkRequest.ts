// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Create instance test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance IDs. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceIds?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * - **CREATING**: The instance is being created.
   * - **ACTIVATION**: The instance is running.
   * - **RESOURCE_CHANGING**: The instance specifications are being changed.
   * - **ORDER_PREPARING**: The order is being confirmed.
   * - **READONLY_RESOURCE_CHANGING**: The instance resources are being changed and the instance is locked for writes.
   * - **DELETING**: The instance is being deleted.
   * 
   * @example
   * ACTIVATION
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30** (default)
   * - **50**
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The instance tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceIds: 'DBInstanceIds',
      DBInstanceStatus: 'DBInstanceStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceIds: 'string',
      DBInstanceStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

