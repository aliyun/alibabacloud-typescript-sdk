// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. No value is returned for this parameter.
   * 
   * @example
   * null
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * gp-wz9kmr708m155j***
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25C11EE5-B7E8-481A-A07C-BD619971A570
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
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

