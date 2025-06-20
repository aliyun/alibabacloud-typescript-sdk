// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDeliveryChannelRequestResourceChangeDeliverySlsProperties } from "./CreateDeliveryChannelRequestResourceChangeDeliverySlsProperties";


export class CreateDeliveryChannelRequestResourceChangeDelivery extends $dara.Model {
  slsProperties?: CreateDeliveryChannelRequestResourceChangeDeliverySlsProperties;
  targetArn?: string;
  /**
   * @example
   * SLS
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      slsProperties: 'SlsProperties',
      targetArn: 'TargetArn',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsProperties: CreateDeliveryChannelRequestResourceChangeDeliverySlsProperties,
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

