// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TemplateStatusLatestDeployment extends $dara.Model {
  finishedTime?: string;
  /**
   * @example
   * BuildFinished
   */
  phase?: string;
  pipelineName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      finishedTime: 'finishedTime',
      phase: 'phase',
      pipelineName: 'pipelineName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedTime: 'string',
      phase: 'string',
      pipelineName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

