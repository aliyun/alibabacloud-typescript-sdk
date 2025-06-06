// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelTask extends $dara.Model {
  currentBytes?: string;
  errCode?: string;
  errMsg?: string;
  extra?: any;
  /**
   * @deprecated
   */
  fileSize?: number;
  /**
   * @deprecated
   */
  finishTime?: number;
  finished?: boolean;
  finishedTime?: number;
  id?: string;
  params?: string;
  result?: any;
  speed?: string;
  startTime?: number;
  status?: string;
  taskId?: string;
  taskType?: string;
  /**
   * @deprecated
   */
  total?: number;
  totalBytes?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentBytes: 'currentBytes',
      errCode: 'errCode',
      errMsg: 'errMsg',
      extra: 'extra',
      fileSize: 'fileSize',
      finishTime: 'finishTime',
      finished: 'finished',
      finishedTime: 'finishedTime',
      id: 'id',
      params: 'params',
      result: 'result',
      speed: 'speed',
      startTime: 'startTime',
      status: 'status',
      taskId: 'taskId',
      taskType: 'taskType',
      total: 'total',
      totalBytes: 'totalBytes',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentBytes: 'string',
      errCode: 'string',
      errMsg: 'string',
      extra: 'any',
      fileSize: 'number',
      finishTime: 'number',
      finished: 'boolean',
      finishedTime: 'number',
      id: 'string',
      params: 'string',
      result: 'any',
      speed: 'string',
      startTime: 'number',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      total: 'number',
      totalBytes: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

