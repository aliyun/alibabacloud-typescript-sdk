// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiModelProviderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OpenAI
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gw-ucbx3s2m****
   */
  gatewayId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * openai
   */
  provider?: string;
  serviceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      gatewayId: 'gatewayId',
      provider: 'provider',
      serviceIds: 'serviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      gatewayId: 'string',
      provider: 'string',
      serviceIds: { 'type': 'array', 'itemType': 'string' },
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

