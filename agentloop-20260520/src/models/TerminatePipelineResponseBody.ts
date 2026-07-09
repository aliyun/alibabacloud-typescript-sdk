// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TerminatePipelineResponseBody extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpaceName?: string;
  /**
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  /**
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @example
   * Terminated
   */
  scheduleStatus?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:00:00.000Z
   */
  terminateTime?: string;
  /**
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

