// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSessionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The correlation identifier for this call. It is echoed in the response and does not provide idempotency guarantees.
   * 
   * @example
   * request-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC protocol version. Set the value to `2.0`.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The business parameter object. For nested fields, see the supplementary description of request parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * {"clientToken":"create-review-001","_meta":{"agent":{"agentName":"review-agent-demo"},"initialConfigOptions":{"approvalMode":"default"}}}
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

