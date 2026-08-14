// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataCheckTableDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The data validation method. Valid values:
   * 
   * - **1**: full data validation.
   * - **2**: incremental data validation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  checkType?: number;
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
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: **1**.
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
   * rg-aekz4us4iruleja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The schema name of the object to be verified in the source database.
   * 
   * @example
   * dtstest
   */
  schemaName?: string;
  /**
   * @remarks
   * The status of the verification result. Valid values:
   * - **-1** (default): all statuses.
   * - **6**: tables with inconsistent data.
   * 
   * @example
   * -1
   */
  status?: string;
  /**
   * @remarks
   * The name of the table to be verified in the source database.
   * 
   * @example
   * student
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      dtsJobId: 'DtsJobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      schemaName: 'SchemaName',
      status: 'Status',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      dtsJobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      schemaName: 'string',
      status: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

