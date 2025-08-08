// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadModelOutputData extends $dara.Model {
  modelPath?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      modelPath: 'modelPath',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelPath: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadModelOutput extends $dara.Model {
  data?: DownloadModelOutputData;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
      data: DownloadModelOutputData,
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

