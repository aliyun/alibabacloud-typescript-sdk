// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task configuration.
   * 
   * @example
   * {
   * 	"mode": "overwrite",
   * 	"partitions": {
   * 		"dt": "20230820"
   * 	},
   * 	"event_time": "",
   * 	"config": {},
   * 	"offline_to_online": true
   * }
   */
  config?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The execution time.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtExecutedTime?: string;
  /**
   * @remarks
   * The completion time.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtFinishedTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The ID of the target object.
   * 
   * @example
   * 3
   */
  objectId?: string;
  /**
   * @remarks
   * The type of the target object.
   * 
   * - ModelFeature: model feature
   * 
   * - FeatureView: feature view
   * 
   * @example
   * ModelFeature
   */
  objectType?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * project_1
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 37D19490-AB69-567D-A852-407C94E510E9
   */
  requestId?: string;
  /**
   * @remarks
   * The task runtime configuration.
   * 
   * @example
   * DROP TABLE IF EXISTS public.fsxxx
   */
  runningConfig?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * - Initializing: The task is initializing.
   * 
   * - Running: The task is running.
   * 
   * - Success: The task completed successfully.
   * 
   * - Failure: The task failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task type.
   * 
   * - OfflineToOnline: offline-to-online data synchronization
   * 
   * - ExportTrainingSet: training sample table export
   * 
   * @example
   * OfflineToOnline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      gmtCreateTime: 'GmtCreateTime',
      gmtExecutedTime: 'GmtExecutedTime',
      gmtFinishedTime: 'GmtFinishedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      runningConfig: 'RunningConfig',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      gmtCreateTime: 'string',
      gmtExecutedTime: 'string',
      gmtFinishedTime: 'string',
      gmtModifiedTime: 'string',
      objectId: 'string',
      objectType: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
      runningConfig: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

