// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteChangeRequestReleaseStageResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  object?: number;
  /**
   * @example
   * 3259***
   */
  pipelineId?: number;
  /**
   * @example
   * 1
   */
  pipelineRunId?: number;
  static names(): { [key: string]: string } {
    return {
      object: 'object',
      pipelineId: 'pipelineId',
      pipelineRunId: 'pipelineRunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      object: 'number',
      pipelineId: 'number',
      pipelineRunId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

