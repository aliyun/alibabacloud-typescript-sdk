// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentResponseBodyDataTask extends $dara.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-03-05 18:24:08
   */
  createTime?: number;
  /**
   * @remarks
   * End time
   * 
   * @example
   * 2024-03-05 18:34:08
   */
  endTime?: number;
  /**
   * @remarks
   * Experiment parameters
   */
  params?: { [key: string]: string };
  /**
   * @remarks
   * Scene
   * 
   * @example
   * baseline
   */
  scene?: string;
  /**
   * @remarks
   * Start time
   * 
   * @example
   * 2024-03-05 18:24:08
   */
  startTime?: number;
  /**
   * @remarks
   * Status
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 167420
   */
  taskId?: number;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2024-03-05 18:24:08
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      params: 'Params',
      scene: 'Scene',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'number',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      scene: 'string',
      startTime: 'number',
      status: 'string',
      taskId: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

