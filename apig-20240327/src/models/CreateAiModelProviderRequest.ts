// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiModelProviderRequest extends $dara.Model {
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
   * The model provider identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * openai
   */
  provider?: string;
  /**
   * @remarks
   * The list of service IDs to bind to the provider.
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
      displayName: 'displayName',
      gatewayId: 'gatewayId',
      provider: 'provider',
      serviceIds: 'serviceIds',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

