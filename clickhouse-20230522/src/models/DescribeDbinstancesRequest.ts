// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster IDs. Separate multiple cluster IDs with commas (,).
   * 
   * @example
   * cc-xxxxx,cx-xxxx
   */
  DBInstanceIds?: string;
  /**
   * @remarks
   * The cluster status.
   * 
   * @example
   * active
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * test
   */
  description?: string;
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
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
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
  static names(): { [key: string]: string } {
    return {
      DBInstanceIds: 'DBInstanceIds',
      DBInstanceStatus: 'DBInstanceStatus',
      description: 'Description',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIds: 'string',
      DBInstanceStatus: 'string',
      description: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

