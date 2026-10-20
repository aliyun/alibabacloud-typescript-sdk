// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TerminatePipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace where the pipeline is located.
   * 
   * @example
   * my-agent-space
   */
  agentSpaceName?: string;
  /**
   * @remarks
   * The name of the pipeline.
   * 
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * The request ID, which is used to locate the request during troubleshooting.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling status. The value is fixed to Terminated, which is an irreversible desired state.
   * 
   * @example
   * Terminated
   */
  scheduleStatus?: string;
  /**
   * @remarks
   * The termination time in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:00:00.000Z
   */
  terminateTime?: string;
  /**
   * @remarks
   * The reason for termination.
   * 
   * @example
   * project deprecated
   */
  terminatedReason?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpaceName: 'agentSpaceName',
      pipelineName: 'pipelineName',
      requestId: 'requestId',
      scheduleStatus: 'scheduleStatus',
      terminateTime: 'terminateTime',
      terminatedReason: 'terminatedReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpaceName: 'string',
      pipelineName: 'string',
      requestId: 'string',
      scheduleStatus: 'string',
      terminateTime: 'string',
      terminatedReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

