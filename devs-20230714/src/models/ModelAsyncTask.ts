// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelAsyncTask extends $dara.Model {
  errCode?: string;
  errMsg?: string;
  finished?: boolean;
  finishedTime?: number;
  result?: any;
  startTime?: number;
  taskType?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'errCode',
      errMsg: 'errMsg',
      finished: 'finished',
      finishedTime: 'finishedTime',
      result: 'result',
      startTime: 'startTime',
      taskType: 'taskType',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMsg: 'string',
      finished: 'boolean',
      finishedTime: 'number',
      result: 'any',
      startTime: 'number',
      taskType: 'string',
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

