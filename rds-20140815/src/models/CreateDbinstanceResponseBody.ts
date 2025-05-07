// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal endpoint of the instance.
   * 
   * @example
   * rm-uf6wjk5*****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID. If the value of the **Amount** parameter is greater than **1**, more than one instance ID is returned. The number of instance IDs that are returned is the same as the value of the Amount parameter. The returned instance IDs are separated by commas (,).
   * 
   * For example, if the value of the **Amount** parameter is **3**, three instance IDs are returned. Examples: `rm-uf6wjk5*****1,rm-uf6wjk5*****2,rm-uf6wjk5*****3`
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Indicates that the system performed a dry run.
   * 
   * *   The value is fixed as **true**.
   * *   If the system does not perform a dry run, this parameter is not returned.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Indicates whether the request passed the dry run. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > *   If the system does not perform a dry run, this parameter is not returned.
   * > *   If the request failed the dry run, an error message is returned.
   * 
   * @example
   * true
   */
  dryRunResult?: boolean;
  /**
   * @remarks
   * The message that indicates whether multiple instances are created.
   * 
   * > The parameter is returned only when the value of the **Amount** parameter is greater than 1.
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
   * 1007893702*****
   */
  orderId?: string;
  /**
   * @remarks
   * The internal IP address and port number that are used to connect to the instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the specified tag is added to the instance. Valid values:
   * 
   * *   **true**: The specified tag is added to the instance.
   * *   **false**: The specified tag fails to be added to the instance.
   * 
   * > If you do not add a tag to the instance, this parameter is not returned.
   * 
   * @example
   * true
   */
  tagResult?: boolean;
  /**
   * @remarks
   * The ID of the task that is run to create multiple instances.
   * 
   * *   This parameter is returned only when the value of **Amount** is greater than 1.
   * *   The **TaskID** parameter cannot be used to query a task.
   * 
   * @example
   * s2365879-a9d0-55af-fgae-f2*****
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

