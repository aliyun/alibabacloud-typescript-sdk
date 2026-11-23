// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerAccessOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The target AI gateway instance ID. Quotas and resources are isolated by instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-123456
   */
  gatewayId?: string;
  /**
   * @remarks
   * Specifies whether to also query the model TPM limits. Default value: false. If set to true, modelTpmLimits is returned for dedicated instances.
   * 
   * @example
   * true
   */
  includeModelTpm?: boolean;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      includeModelTpm: 'includeModelTpm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      includeModelTpm: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

