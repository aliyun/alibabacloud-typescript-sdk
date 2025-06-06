// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnvironmentDeploymentStatus extends $dara.Model {
  finishedTime?: string;
  /**
   * @example
   * Running
   */
  phase?: string;
  /**
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  serviceDeployments?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      finishedTime: 'finishedTime',
      phase: 'phase',
      pipelineName: 'pipelineName',
      serviceDeployments: 'serviceDeployments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedTime: 'string',
      phase: 'string',
      pipelineName: 'string',
      serviceDeployments: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.serviceDeployments) {
      $dara.Model.validateMap(this.serviceDeployments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

