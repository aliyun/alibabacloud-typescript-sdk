// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudMigrationPrecheckTaskRequest extends $dara.Model {
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
  resourceOwnerId?: number;
  /**
   * @remarks
   * The username of the database account. This is the database account created in the [Create a migration account](https://help.aliyun.com/document_detail/369500.html) step.
   * 
   * This parameter is required.
   * 
   * @example
   * migratetest
   */
  sourceAccount?: string;
  /**
   * @remarks
   * The type of the self-managed PostgreSQL database. Valid values:
   * 
   * - **idcOnVpc**: a self-managed PostgreSQL database in an on-premises data center that is connected to a VPC.
   * - **ecsOnVpc**: a self-managed PostgreSQL database on an Alibaba Cloud ECS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecsOnVpc
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The internal IP address of the self-managed PostgreSQL database.
   * 
   * - For the one-click cloud migration scenario of a self-managed PostgreSQL database on an ECS instance, set this parameter to the private IP address of the ECS instance. For more information, see [View IP addresses](https://help.aliyun.com/document_detail/273914.html).
   * - For the one-click cloud migration scenario of a self-managed PostgreSQL database in an IDC, set this parameter to the internal IP address of the IDC.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.2.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The password of the database account. This is the password of the database account created in the [Create a migration account](https://help.aliyun.com/document_detail/369500.html) step.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  sourcePassword?: string;
  /**
   * @remarks
   * The port number of the self-managed PostgreSQL database. You can run the `netstat -a | grep PGSQL` command to view the port number.
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

