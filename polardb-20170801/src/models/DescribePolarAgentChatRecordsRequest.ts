// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarAgentChatRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The session ID. To obtain the SessionId, use Signature Version 3.0 to call GetPolarAgent to initiate a conversation and extract the SessionId from the returned stream.
   * 
   * This parameter is required.
   * 
   * @example
   * 44dcdf31-04cd-4a44-9bae-834dd6657e29
   */
  sessionId?: string;
  /**
   * @remarks
   * The product type source. Valid value: polardb-console.
   * 
   * @example
   * polardb-console
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

