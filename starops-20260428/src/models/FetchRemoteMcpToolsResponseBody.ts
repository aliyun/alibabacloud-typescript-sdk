// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchRemoteMcpToolsResponseBody extends $dara.Model {
  /**
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-************
   */
  requestId?: string;
  /**
   * @example
   * {"jsonrpc":"2.0","id":1,"result":{"tools":[]}}
   */
  tools?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tools: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

