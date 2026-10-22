// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * New instance test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The IDs of the instances. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceIds?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * - **CREATING**: Creating.
   * 
   * - **ACTIVATION**: Running.
   * 
   * - **RESOURCE_CHANGING**: Changing specifications.
   * 
   * - **ORDER_PREPARING**: Confirming the order.
   * 
   * - **READONLY_RESOURCE_CHANGING**: Changing resources (the instance is locked for writing).
   * 
   * - **DELETING**: Deleting.
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
   * The ID of the resource group.
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

