// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBody extends $dara.Model {
  /**
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
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtExecutedTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtFinishedTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 3
   */
  objectId?: string;
  /**
   * @example
   * ModelFeature
   */
  objectType?: string;
  /**
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * project_1
   */
  projectName?: string;
  /**
   * @example
   * 37D19490-AB69-567D-A852-407C94E510E9
   */
  requestId?: string;
  /**
   * @example
   * DROP TABLE IF EXISTS public.fsxxx
   */
  runningConfig?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
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

