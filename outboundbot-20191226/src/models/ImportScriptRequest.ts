// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportScriptRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 00b37342-e759-4fe5-b296-aef775933af0
   */
  instanceId?: string;
  /**
   * @remarks
   * NLU engine. Applies only to Large Language Model (LLM) scenarios.
   * 
   * Valid values:
   * 
   * - Prompts: LLM scenario.
   * 
   * - Empty: Non-LLM scenario.
   * 
   * @example
   * Prompts
   */
  nluEngine?: string;
  /**
   * @remarks
   * URL of the scenario JSON file to import.
   * 
   * > This value is the Folder parameter returned by the GetJobDataUploadParams operation.
   * 
   * This parameter is required.
   * 
   * @example
   * UPLOADED/SCRIPT/136a055e-***-46c6-853a-731b3a2973de/18dc6d79-338f-413c-a5a8-dcce5f05b41a_9bd7916d-a340-4925-a911-92390cbe0f33.json
   */
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nluEngine: 'NluEngine',
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nluEngine: 'string',
      signatureUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

