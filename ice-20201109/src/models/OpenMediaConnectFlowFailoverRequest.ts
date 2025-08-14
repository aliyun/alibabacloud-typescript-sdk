// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenMediaConnectFlowFailoverRequest extends $dara.Model {
  /**
   * @example
   * 34900dc6-90ec-4968-af3c-fcd87f231a5f
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

