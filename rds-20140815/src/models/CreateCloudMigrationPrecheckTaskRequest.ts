// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudMigrationPrecheckTaskRequest extends $dara.Model {
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
  resourceOwnerId?: number;
  /**
   * @remarks
   * The username of the account that is used to connect to the self-managed PostgreSQL instance. Enter the username of the account that you created in the [Create an account for cloud migration on a self-managed PostgreSQL instance](https://help.aliyun.com/document_detail/369500.html) topic.
   * 
   * This parameter is required.
   * 
   * @example
   * migratetest
   */
  sourceAccount?: string;
  /**
   * @remarks
   * The environment in which the self-managed PostgreSQL instance runs.
   * 
   * *   **idcOnVpc**: The self-managed PostgreSQL instance resides in a data center. The data center can communicate with the VPC to which the ApsaraDB RDS for PostgreSQL instance belongs.
   * *   **ecsOnVpc**: The self-managed PostgreSQL instance resides on an ECS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecsOnVpc
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The private IP address that is used to connect to the self-managed PostgreSQL instance.
   * 
   * *   If the self-managed PostgreSQL instance resides on an ECS instance, enter the private IP address of the ECS instance. For more information about how to obtain the private IP address of an ECS instance, see [View IP addresses](https://help.aliyun.com/document_detail/273914.html).
   * *   If the self-managed PostgreSQL instance resides in an on-premises data center, enter the private IP address of the on-premises data center.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.2.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The password of the account that is used to connect to the self-managed PostgreSQL instance. Enter the password of the account that you created in the [Create an account for cloud migration on a self-managed PostgreSQL instance](https://help.aliyun.com/document_detail/369500.html) topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  sourcePassword?: string;
  /**
   * @remarks
   * The port that is used to connect to the self-managed PostgreSQL instance. You can run the `netstat -a | grep PGSQL` command to view the port.
   * 
   * This parameter is required.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * The name of the task. If you do not specify this parameter, ApsaraDB RDS automatically generates a name for the cloud migration task.
   * 
   * @example
   * slf7w7wj3g
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      resourceOwnerId: 'ResourceOwnerId',
      sourceAccount: 'SourceAccount',
      sourceCategory: 'SourceCategory',
      sourceIpAddress: 'SourceIpAddress',
      sourcePassword: 'SourcePassword',
      sourcePort: 'SourcePort',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      resourceOwnerId: 'number',
      sourceAccount: 'string',
      sourceCategory: 'string',
      sourceIpAddress: 'string',
      sourcePassword: 'string',
      sourcePort: 'number',
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

