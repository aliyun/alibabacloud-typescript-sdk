// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployOllamaModelOutputData extends $dara.Model {
  deploymentTaskID?: string;
  errorMessage?: string;
  finished?: boolean;
  modelName?: string;
  serviceName?: string;
  traceID?: string;
  urlInternet?: string;
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentTaskID: 'deploymentTaskID',
      errorMessage: 'errorMessage',
      finished: 'finished',
      modelName: 'modelName',
      serviceName: 'serviceName',
      traceID: 'traceID',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentTaskID: 'string',
      errorMessage: 'string',
      finished: 'boolean',
      modelName: 'string',
      serviceName: 'string',
      traceID: 'string',
      urlInternet: 'string',
      urlIntranet: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployOllamaModelOutput extends $dara.Model {
  data?: DeployOllamaModelOutputData;
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
      data: DeployOllamaModelOutputData,
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

