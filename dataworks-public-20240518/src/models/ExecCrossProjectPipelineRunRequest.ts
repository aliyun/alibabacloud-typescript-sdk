// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecCrossProjectPipelineRunRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fcfd4160-e2ff-4603-9719-09128fe733df
   */
  pipelineRunId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineRunId: 'PipelineRunId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineRunId: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

