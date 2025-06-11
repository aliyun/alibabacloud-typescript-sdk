// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatappMessageRequestFlowAction extends $dara.Model {
  /**
   * @remarks
   * The default parameter of the Flow.
   */
  flowActionData?: { [key: string]: any };
  /**
   * @remarks
   * The Flow token.
   * 
   * @example
   * 1122***
   */
  flowToken?: string;
  static names(): { [key: string]: string } {
    return {
      flowActionData: 'FlowActionData',
      flowToken: 'FlowToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowActionData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flowToken: 'string',
    };
  }

  validate() {
    if(this.flowActionData) {
      $dara.Model.validateMap(this.flowActionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

