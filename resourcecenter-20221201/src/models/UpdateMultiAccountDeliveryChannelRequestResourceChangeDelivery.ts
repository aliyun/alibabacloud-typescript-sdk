// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMultiAccountDeliveryChannelRequestResourceChangeDeliverySlsProperties } from "./UpdateMultiAccountDeliveryChannelRequestResourceChangeDeliverySlsProperties";


export class UpdateMultiAccountDeliveryChannelRequestResourceChangeDelivery extends $dara.Model {
  /**
   * @example
   * true
   */
  enabled?: string;
  slsProperties?: UpdateMultiAccountDeliveryChannelRequestResourceChangeDeliverySlsProperties;
  targetArn?: string;
  /**
   * @example
   * SLS
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      slsProperties: 'SlsProperties',
      targetArn: 'TargetArn',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'string',
      slsProperties: UpdateMultiAccountDeliveryChannelRequestResourceChangeDeliverySlsProperties,
      targetArn: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(this.slsProperties && typeof (this.slsProperties as any).validate === 'function') {
      (this.slsProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

