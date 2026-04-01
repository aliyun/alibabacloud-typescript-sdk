// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceNetworkTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to connect to the instance.
   * 
   * @example
   * rm-bp1*****************.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 1025486523574
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
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

