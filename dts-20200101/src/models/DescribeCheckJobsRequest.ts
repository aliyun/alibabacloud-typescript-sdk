// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data validation task.
   * 
   * @example
   * z9p104ib23***
   */
  checkJobId?: string;
  /**
   * @remarks
   * The data validation method. Valid values:
   * 
   * - **1**: full data validation.
   * - **2**: incremental data validation.
   * - **3**: all.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The ID of the data migration instance. You can call the **DescribeMigrationJobs** operation to query the ID.
   * 
   * @example
   * dtsz9p104ib23e972e
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the data migration or data synchronization task.
   * 
   * @example
   * zwy_test
   */
  jobName?: string;
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
   * The number of records per page. Valid values: **30**, **50**, and **100**. Default value: **30**.
   * 
   * @example
   * 30
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
  static names(): { [key: string]: string } {
    return {
      checkJobId: 'CheckJobId',
      checkType: 'CheckType',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkJobId: 'string',
      checkType: 'number',
      instanceId: 'string',
      jobName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

