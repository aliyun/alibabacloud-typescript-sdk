// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMapRunRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  concurrency?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my_exec_name
   */
  executionName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my_flow_name
   */
  flowName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c39142f1345b196d678333c41f113100
   */
  mapRunName?: string;
  /**
   * @example
   * 3A44E113-9962-5B0B-AB92-14060EFE3164
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  toleratedFailedCount?: number;
  /**
   * @example
   * 20
   */
  toleratedFailedPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      mapRunName: 'MapRunName',
      requestId: 'RequestId',
      toleratedFailedCount: 'ToleratedFailedCount',
      toleratedFailedPercentage: 'ToleratedFailedPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      executionName: 'string',
      flowName: 'string',
      mapRunName: 'string',
      requestId: 'string',
      toleratedFailedCount: 'number',
      toleratedFailedPercentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

