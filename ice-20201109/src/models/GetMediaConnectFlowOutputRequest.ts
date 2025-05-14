// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConnectFlowOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0381f478-7d53-4076-9d5f-27680a6f73e7
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the output that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * AliTestOutput
   */
  outputName?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      outputName: 'OutputName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      outputName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

