// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudMigrationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the target instance. You can invoke the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The internal IP address of the self-managed PostgreSQL database.
   * 
   * - In the scenario of migrating a self-managed PostgreSQL database on an ECS instance to the cloud with one click, set this parameter to the private IP address of the ECS instance. For more information about how to obtain the IP address, see [View IP addresses](https://help.aliyun.com/document_detail/273914.html).
   * - In the scenario of migrating a self-managed PostgreSQL database in an on-premises data center to the cloud with one click, set this parameter to the internal IP address of the data center.
   * 
   * @example
   * 172.16.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The port of the self-managed PostgreSQL database. You can run the netstat -a | grep PGSQL command to view the port.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * The ID of the task. You can obtain the task ID from the response when you call the CreateCloudMigrationTask operation to create an ApsaraDB RDS for PostgreSQL cloud migration task.
   * 
   * @example
   * 440437220
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task. You can obtain the task name from the response when you call the CreateCloudMigrationTask operation to create an ApsaraDB RDS for PostgreSQL cloud migration task.
   * 
   * @example
   * 362c6c7a-4d20-4eac-898c-1495ceab374c
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

