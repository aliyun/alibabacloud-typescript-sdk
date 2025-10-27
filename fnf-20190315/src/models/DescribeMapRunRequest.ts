// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMapRunRequest extends $dara.Model {
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
   * c39142f1345b196d678333c41f113200
   */
  mapRunName?: string;
  /**
   * @example
   * 3A44E113-9962-5B0B-AB92-14060EFE3164
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      mapRunName: 'MapRunName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: 'string',
      flowName: 'string',
      mapRunName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

