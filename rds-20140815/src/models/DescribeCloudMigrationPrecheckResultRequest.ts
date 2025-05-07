// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudMigrationPrecheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30** to **100**. Default value: 30.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The private or public IP address that is used to connect to the self-managed PostgreSQL instance.
   * 
   * *   If the self-managed PostgreSQL instance resides on an Elastic Compute Service (ECS) instance, enter the private IP address of the ECS instance. For more information about how to obtain the private IP address of an ECS instance, see [View IP addresses](https://help.aliyun.com/document_detail/273914.html).
   * *   If the self-managed PostgreSQL instance resides in an on-premises data center, enter the private IP address of the on-premises data center.
   * 
   * @example
   * 172.2.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The port number that is used to connect to the self-managed PostgreSQL instance. You can run the netstat -a | grep PGSQL command to obtain the port number.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * The task ID. You can obtain the task ID from the response that is returned after you call the CreateCloudMigrationPrecheckTask operation to create the task.
   * 
   * @example
   * 439946016
   */
  taskId?: number;
  /**
   * @remarks
   * The task name. You can obtain the task name from the response that is returned after you call the CreateCloudMigrationPrecheckTask operation to create the task.
   * 
   * @example
   * slf7w7wj3g
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerId: 'number',
      sourceIpAddress: 'string',
      sourcePort: 'number',
      taskId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

