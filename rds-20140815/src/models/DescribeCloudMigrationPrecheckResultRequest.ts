// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudMigrationPrecheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the target instance. You can invoke the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The page number. Valid values: any positive integer up to the maximum value of the Integer type. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30** to **100**.
   * Default value: 30.
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
   * The internal IP address or public IP address of the self-managed PostgreSQL database.
   * 
   * - In the one-click cloud migration scenario for a self-managed PostgreSQL database on an ECS instance, set this parameter to the private IP address of the ECS instance. For more information about how to obtain the IP address, see [View IP addresses](https://help.aliyun.com/document_detail/273914.html).
   * - In the one-click cloud migration scenario for a self-managed PostgreSQL database in a data center, set this parameter to the internal IP address of the data center.
   * 
   * @example
   * 172.2.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The port of the self-managed PostgreSQL database. You can run the `netstat -a | grep PGSQL` command to view the port.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * The ID of the task. You can obtain the task ID from the response message when you call the CreateCloudMigrationPrecheckTask operation to create a pre-check task for one-click cloud migration.
   * 
   * @example
   * 439946016
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task. You can obtain the task name from the response message when you call the CreateCloudMigrationPrecheckTask operation to create a pre-check task for one-click cloud migration.
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

