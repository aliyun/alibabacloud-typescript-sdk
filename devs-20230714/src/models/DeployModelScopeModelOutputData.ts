// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployModelScopeModelOutputData extends $dara.Model {
  deploymentTaskID?: string;
  errorMessage?: string;
  finished?: boolean;
  serviceName?: string;
  taskType?: string;
  traceID?: string;
  urlInternet?: string;
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentTaskID: 'deploymentTaskID',
      errorMessage: 'errorMessage',
      finished: 'finished',
      serviceName: 'serviceName',
      taskType: 'taskType',
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
      serviceName: 'string',
      taskType: 'string',
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

