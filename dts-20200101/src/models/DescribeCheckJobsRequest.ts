// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Check the task job ID.
   * 
   * @example
   * z9p104ib23***
   */
  checkJobId?: string;
  /**
   * @remarks
   * The type of the check
   * >>1 full quantity, 2 incremental, 3 all
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * Data migration instance ID, which can be queried by calling the **describemigrationjobs** API.
   * 
   * @example
   * dtsz9p104ib23e972e
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the data migration or synchronization job.
   * 
   * @example
   * zwy_test
   */
  jobName?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Resource group ID.
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

