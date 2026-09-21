// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPreCheckDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the server database backup client.
   * > You can call the [DescribeUniBackupDatabase](~~DescribeUniBackupDatabase~~) operation to obtain this parameter.
   * 
   * You must specify at least one of TaskId and InstanceUuid. If neither is specified, the API returns HTTP 400 with error code -106.
   * 
   * @example
   * ebc895506c6911ed800000163e0e****
   */
  instanceUuid?: string;
  /**
   * @remarks
   * The ID of the database pre-check task.
   * > You can call the [StartPreCheckDatabase](~~StartPreCheckDatabase~~) operation to obtain this parameter.
   * 
   * You must specify at least one of TaskId and InstanceUuid. If neither is specified, the API returns HTTP 400 with error code -106.
   * 
   * Call DescribeUniBackupDatabase to obtain the InstanceUuid, and then pass it to StartPreCheckDatabase. The CreateMark returned by StartPreCheckDatabase is the TaskId required by this operation.
   * 
   * @example
   * t-000bc9nqwxsbyvod****
   */
  taskId?: string;
  /**
   * @remarks
   * The region ID of the database server.
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

