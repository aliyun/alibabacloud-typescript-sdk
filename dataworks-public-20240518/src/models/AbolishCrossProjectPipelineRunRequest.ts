// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbolishCrossProjectPipelineRunRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cross-workspace deployment pipeline run.
   * 
   * This parameter is required.
   * 
   * @example
   * fcfd4160-e2ff-4603-9719-09128fe733df
   */
  pipelineRunId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  projectId?: number;
  /**
   * @remarks
   * The reason for terminating the pipeline run.
   * 
   * @example
   * The target deployment plan has changed. Terminate the pipeline run that has not yet executed
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineRunId: 'PipelineRunId',
      projectId: 'ProjectId',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineRunId: 'string',
      projectId: 'number',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

