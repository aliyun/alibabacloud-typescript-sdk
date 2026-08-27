// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelProviderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the model provider.
   * 
   * This parameter is required.
   * 
   * @example
   * https://api.example.com
   */
  address?: string;
  /**
   * @remarks
   * The list of API keys for the model provider, in JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * ["sk-xxx"]
   */
  apiKeysShrink?: string;
  /**
   * @remarks
   * The idempotency token that ensures the idempotence of the request.
   * 
   * @example
   * ct-xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the model provider.
   * 
   * @example
   * my provider
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Optional. The instance name for fuzzy matching.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  name?: string;
  /**
   * @remarks
   * The list of protocols supported by the model provider, in JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * ["openai"]
   */
  protocolsShrink?: string;
  /**
   * @remarks
   * Optional. The instance status for exact matching.
   * 
   * This parameter is required.
   * 
   * @example
   * RUNNING
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      apiKeysShrink: 'ApiKeys',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      protocolsShrink: 'Protocols',
      provider: 'Provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      apiKeysShrink: 'string',
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      protocolsShrink: 'string',
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

