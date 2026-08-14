// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataCheckTableDiffDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The data validation method. Valid values:
   * 
   * - **1**: full verification.
   * - **2**: incremental verification.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  checkType?: number;
  /**
   * @remarks
   * The name of the database that contains the table with inconsistent data.
   * 
   * This parameter is required.
   * 
   * @example
   * db_dtstest
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the data migration or data synchronization task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xd4e4xb419q****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the table that contains inconsistent data.
   * 
   * This parameter is required.
   * 
   * @example
   * test_person
   */
  tbName?: string;
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      dbName: 'DbName',
      dtsJobId: 'DtsJobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      tbName: 'TbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      dbName: 'string',
      dtsJobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tbName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

