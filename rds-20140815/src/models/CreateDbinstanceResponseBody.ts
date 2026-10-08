// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal endpoint of the instance.
   * 
   * @example
   * rm-uf6wjk5****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID. If you set the **Amount** parameter to a value greater than **1**, the number of instance IDs that corresponds to the value is returned, separated by commas.
   * 
   * For example, if **Amount** is set to **3**, three instance IDs are returned. Example:
   * `rm-uf6wjk5*****1，rm-uf6wjk5*****2，rm-uf6wjk5*****3`
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Indicates that a dry run is performed before the instance is created.
   * 
   * * The return value is always **true**.
   * * If no dry run is performed, this parameter is not returned.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Indicates whether the dry run for instance creation passed. Valid values:
   * * **true**: The dry run passed.
   * * **false**: The dry run failed.
   * 
   * > * If no dry run is performed, this parameter is not returned.
   * > * If the dry run fails, the corresponding error is returned.
   * 
   * @example
   * true
   */
  dryRunResult?: boolean;
  /**
   * @remarks
   * The message for the batch creation task.
   * 
   * > This parameter is returned only when the **Amount** parameter is greater than 1.
   * 
   * @example
   * Batch Create DBInstance Task Is In Process.
   */
  message?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 1007893702****
   */
  orderId?: string;
  /**
   * @remarks
   * The port number that corresponds to the internal endpoint of the instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether tags are successfully bound to the instance. Valid values:
   * * **true**: Tags are successfully bound.
   * * **false**: Tags failed to be bound.
   * 
   * > If no tags are bound to the instance, this parameter is not returned.
   * 
   * @example
   * true
   */
  tagResult?: boolean;
  /**
   * @remarks
   * The task ID of the batch creation task.
   * 
   * * This parameter is returned only when the **Amount** parameter is greater than 1.
   * * Querying tasks by **TaskId** is not supported at this time.
   * 
   * @example
   * s2365879-a9d0-55af-fgae-f2****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      dryRun: 'DryRun',
      dryRunResult: 'DryRunResult',
      message: 'Message',
      orderId: 'OrderId',
      port: 'Port',
      requestId: 'RequestId',
      tagResult: 'TagResult',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceId: 'string',
      dryRun: 'boolean',
      dryRunResult: 'boolean',
      message: 'string',
      orderId: 'string',
      port: 'string',
      requestId: 'string',
      tagResult: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

