// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is no longer returned.
   * 
   * @example
   * gp-wz9kmr708m155j***
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * gp-wz9kmr708m155j***
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25C11EE5-B7E8-481A-A07C-BD619971A570
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 101450956
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceName: 'string',
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

