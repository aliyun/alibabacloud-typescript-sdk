// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPreCheckDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the agent that is used to back up the data of the database.
   * 
   * > You can call the [DescribeUniBackupDatabase](~~DescribeUniBackupDatabase~~) operation to query the UUID.
   * 
   * @example
   * ebc895506c6911ed800000163e0e****
   */
  instanceUuid?: string;
  /**
   * @remarks
   * The ID of the database precheck task.
   * 
   * > You can call the [StartPreCheckDatabase](~~StartPreCheckDatabase~~) operation to query the ID of the database precheck task.
   * 
   * @example
   * t-000bc9nqwxsbyvod****
   */
  taskId?: string;
  /**
   * @remarks
   * The region ID of the server that hosts the database.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  uniRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceUuid: 'InstanceUuid',
      taskId: 'TaskId',
      uniRegionId: 'UniRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceUuid: 'string',
      taskId: 'string',
      uniRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

