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

export class GetModelStatusOutput extends $dara.Model {
  data?: GetModelStatusOutputData;
  errCode?: string;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetModelStatusOutputData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

