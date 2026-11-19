// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAgentSessionModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The defined JSON-RPC response structure. For more information about the core nested fields, see the supplementary description.
   * 
   * @example
   * {"jsonrpc":"2.0","id":"request-001","result":{"modelId":"text-model-example","thinkingLevel":"off","thinkingLevels":["off","low","medium","high"]}}
   */
  jsonRpcResponse?: any;
  /**
   * @remarks
   * The ID of the current request, which is used for troubleshooting.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the setting is successful. The value is true if the setting is successful. Read the actual model and thinking level from the business result.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      jsonRpcResponse: 'JsonRpcResponse',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonRpcResponse: 'any',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

