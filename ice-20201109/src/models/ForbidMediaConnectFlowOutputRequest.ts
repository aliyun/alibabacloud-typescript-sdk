// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForbidMediaConnectFlowOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the MediaConnect flow.
   * 
   * @example
   * 34900dc6-90ec-4968-af3c-fcd87f231a5f
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the output.
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

