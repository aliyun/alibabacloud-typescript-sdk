// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunPipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace.
   * 
   * @example
   * my-agent-space
   */
  agentSpaceName?: string;
  /**
   * @remarks
   * The pipeline name.
   * 
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The run ID created by this trigger.
   * 
   * @example
   * run-20260101-0001
   */
  runId?: string;
  /**
   * @remarks
   * The current status of the run. The status is typically Pending after the run is queued.
   * 
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpaceName: 'agentSpaceName',
      pipelineName: 'pipelineName',
      requestId: 'requestId',
      runId: 'runId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpaceName: 'string',
      pipelineName: 'string',
      requestId: 'string',
      runId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

