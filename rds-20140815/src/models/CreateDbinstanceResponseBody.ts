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
   * The instance ID. If the **Amount** parameter is set to a value greater than **1**, the number of instance IDs returned corresponds to the value, separated by commas.
   * 
   * For example, if the **Amount** parameter is set to **3**, three instance IDs are returned. Example:
   * `rm-uf6wjk5*****1, rm-uf6wjk5*****2, rm-uf6wjk5*****3`
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Indicates whether the current request requires a precheck before creating the instance.
   * 
   * * The return value is fixed to **true**.
   * * If no precheck is performed, this parameter is not returned.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Indicates whether the precheck for creating the instance is successful. Valid values:
   * * **true**: Passed.
   * * **false**: Failed.
   * 
   * > * If no precheck is performed, this parameter is not returned.
   * > * If the precheck fails, the corresponding error is returned.
   * 
   * @example
   * true
   */
  dryRunResult?: boolean;
  /**
   * @remarks
   * The prompt message for the batch creation task.
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
   * The port number corresponding to the internal endpoint of the instance.
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
   * Indicates whether the instance is successfully tagged. Valid values:
   * * **true**: Succeeded.
   * * **false**: Failed.
   * 
   * > If no tag is bound to the instance, this parameter is not returned.
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
   * * Currently, you cannot view the task by using the value of **TaskId**.
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

