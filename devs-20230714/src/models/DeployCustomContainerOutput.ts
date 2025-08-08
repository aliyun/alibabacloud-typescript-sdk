// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployCustomContainerOutputData extends $dara.Model {
  deploymentTaskID?: string;
  errorMessage?: string;
  finished?: boolean;
  nasConfigStr?: string;
  serviceName?: string;
  traceID?: string;
  urlInternet?: string;
  urlIntranet?: string;
  vpcConfigStr?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentTaskID: 'deploymentTaskID',
      errorMessage: 'errorMessage',
      finished: 'finished',
      nasConfigStr: 'nasConfigStr',
      serviceName: 'serviceName',
      traceID: 'traceID',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
      vpcConfigStr: 'vpcConfigStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentTaskID: 'string',
      errorMessage: 'string',
      finished: 'boolean',
      nasConfigStr: 'string',
      serviceName: 'string',
      traceID: 'string',
      urlInternet: 'string',
      urlIntranet: 'string',
      vpcConfigStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerOutput extends $dara.Model {
  data?: DeployCustomContainerOutputData;
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
      data: DeployCustomContainerOutputData,
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

