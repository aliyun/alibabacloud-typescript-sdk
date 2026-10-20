// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumePipelineResponseBody extends $dara.Model {
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
   * The committed watermark, in UNIX seconds.
   * 
   * @example
   * 1735660800
   */
  committedWatermark?: number;
  /**
   * @remarks
   * The next scheduling trigger time, in UNIX seconds.
   * 
   * @example
   * 1735664400
   */
  nextTriggerTime?: number;
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
   * The request ID used to locate the request during troubleshooting.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling status, which is fixed to Active.
   * 
   * @example
   * Active
   */
  scheduleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpaceName: 'agentSpaceName',
      committedWatermark: 'committedWatermark',
      nextTriggerTime: 'nextTriggerTime',
      pipelineName: 'pipelineName',
      requestId: 'requestId',
      scheduleStatus: 'scheduleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpaceName: 'string',
      committedWatermark: 'number',
      nextTriggerTime: 'number',
      pipelineName: 'string',
      requestId: 'string',
      scheduleStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

