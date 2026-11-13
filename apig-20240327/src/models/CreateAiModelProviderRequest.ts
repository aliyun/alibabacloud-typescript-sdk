// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiModelProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The optional default AI service ID. If not empty, it must be a service in the current association set. Omitting this parameter indicates that no default is set. An explicit empty string clears the default. A non-empty value sets the default. The length cannot exceed 64 characters.
   * 
   * @example
   * svc-d00000000000000000000
   */
  defaultServiceId?: string;
  /**
   * @remarks
   * The display name of the model provider.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenAI
   */
  displayName?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-ucbx3s2m****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The identifier of the model provider.
   * 
   * This parameter is required.
   * 
   * @example
   * openai
   */
  provider?: string;
  /**
   * @remarks
   * The list of service IDs to associate with the provider.
   */
  serviceIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      defaultServiceId: 'defaultServiceId',
      displayName: 'displayName',
      gatewayId: 'gatewayId',
      provider: 'provider',
      serviceIds: 'serviceIds',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultServiceId: 'string',
      displayName: 'string',
      gatewayId: 'string',
      provider: 'string',
      serviceIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceIds)) {
      $dara.Model.validateArray(this.serviceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

