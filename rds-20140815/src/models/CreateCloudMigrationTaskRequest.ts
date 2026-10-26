// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudMigrationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the destination instance. You can call the DescribeDBInstances operation to query the instance ID.
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
   * The username. The database account created in the [Create a migration account](https://help.aliyun.com/document_detail/369500.html) step.
   * 
   * This parameter is required.
   * 
   * @example
   * migratetest
   */
  sourceAccount?: string;
  /**
   * @remarks
   * The category of the source instance. Valid values:
   * - **aliyunRDS**: Alibaba Cloud RDS instance.
   * - **other**: Other.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyunRDS
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The internal or public IP address of the self-managed PostgreSQL database.
   * 
   * - For the one-click cloud migration scenario of a self-managed PostgreSQL database on an ECS instance, set this parameter to the private IP address of the ECS instance. For more information, see [View IP addresses](https://help.aliyun.com/document_detail/98677.html).
   * - For the one-click cloud migration scenario of a self-managed PostgreSQL database in an IDC, set this parameter to the internal IP address of the IDC.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The password. The password of the database account created in the [Create a migration account](https://help.aliyun.com/document_detail/369500.html) step.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  sourcePassword?: string;
  /**
   * @remarks
   * The port of the self-managed PostgreSQL database. You can run the `netstat -a | grep PGSQL` command to view the port.
   * 
   * This parameter is required.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * The name of the task. You can specify a custom name. If you do not specify a name, the system automatically generates one.
   * 
   * @example
   * 362c6c7a-4d20-4eac-898c-1495ceab374c
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

