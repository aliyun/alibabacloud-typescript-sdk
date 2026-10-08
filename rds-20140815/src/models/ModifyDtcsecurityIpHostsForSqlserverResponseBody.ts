// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDTCSecurityIpHostsForSQLServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ApsaraDB RDS instance ID.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The result of configuring the whitelist. Valid values:
   * * **Success**: The configuration is successful.
   * * **Fail**: The configuration failed.
   * 
   * @example
   * Success
   */
  DTCSetResult?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 671B6D32-B907-4EFF-A3B7-94D2EAD5E3A3
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID of the configuration task.
   * 
   * @example
   * 178968983
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DTCSetResult: 'DTCSetResult',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DTCSetResult: 'string',
      requestId: 'string',
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

