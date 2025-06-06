// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceDeploymentStatus extends $dara.Model {
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
  startTime?: string;
  /**
   * @example
   * my-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      finishedTime: 'finishedTime',
      phase: 'phase',
      pipelineName: 'pipelineName',
      startTime: 'startTime',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedTime: 'string',
      phase: 'string',
      pipelineName: 'string',
      startTime: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

