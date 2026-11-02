// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConnectFlowInputRequest extends $dara.Model {
  /**
   * @remarks
   * The flow instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 34900dc6-90ec-4968-af3c-fcd87f231a5f
   */
  flowId?: string;
  /**
   * @remarks
   * Specifies whether to return the internal IP address for stream ingestion. This parameter is valid only when cloud access is established over an Express Connect circuit.
   * 
   * @example
   * on
   */
  withInternalVip?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      withInternalVip: 'WithInternalVip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      withInternalVip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

