// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMediaConnectFlowInputRequest extends $dara.Model {
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
  inputName?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      inputName: 'InputName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      inputName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

