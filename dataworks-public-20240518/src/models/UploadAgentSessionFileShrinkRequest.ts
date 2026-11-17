// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAgentSessionFileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC correlation identifier for the current request. The Id in the response returns this value as is to correlate the request and response.
   * 
   * @example
   * attachment-rpc-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC protocol version. The example uses 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The parameter object for the upload stage. The prepare step issues the upload URL, and the complete step confirms that the file has been written to the target session instance.
   * 
   * This parameter is required.
   */
  paramsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      paramsShrink: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jsonrpc: 'string',
      paramsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

