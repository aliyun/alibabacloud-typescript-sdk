// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelShrinkRequest extends $dara.Model {
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
   * The model description.
   * 
   * @example
   * my model
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
   * Optional. Fuzzy matches instances by name.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  name?: string;
  /**
   * @remarks
   * The list of protocols supported by the model, in JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * ["openai"]
   */
  protocolsShrink?: string;
  /**
   * @remarks
   * The provider identifier.
   * 
   * @example
   * openai
   */
  provider?: string;
  /**
   * @remarks
   * The ID of the model provider.
   * 
   * This parameter is required.
   * 
   * @example
   * p-xxx
   */
  providerId?: string;
  /**
   * @remarks
   * The name of the model provider.
   * 
   * This parameter is required.
   * 
   * @example
   * my-provider
   */
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      protocolsShrink: 'Protocols',
      provider: 'Provider',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      protocolsShrink: 'string',
      provider: 'string',
      providerId: 'string',
      providerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

