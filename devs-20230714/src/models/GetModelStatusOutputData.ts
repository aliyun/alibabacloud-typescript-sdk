// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelStatusOutputData extends $dara.Model {
  currentBytes?: number;
  errMessage?: string;
  fileSize?: number;
  finished?: boolean;
  finishedTime?: number;
  speed?: number;
  startTime?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentBytes: 'currentBytes',
      errMessage: 'errMessage',
      fileSize: 'fileSize',
      finished: 'finished',
      finishedTime: 'finishedTime',
      speed: 'speed',
      startTime: 'startTime',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentBytes: 'number',
      errMessage: 'string',
      fileSize: 'number',
      finished: 'boolean',
      finishedTime: 'number',
      speed: 'number',
      startTime: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

