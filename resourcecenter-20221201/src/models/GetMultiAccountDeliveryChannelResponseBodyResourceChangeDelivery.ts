// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultiAccountDeliveryChannelResponseBodyResourceChangeDeliverySlsProperties } from "./GetMultiAccountDeliveryChannelResponseBodyResourceChangeDeliverySlsProperties";


export class GetMultiAccountDeliveryChannelResponseBodyResourceChangeDelivery extends $dara.Model {
  /**
   * @remarks
   * The Simple Log Service configurations.
   */
  slsProperties?: GetMultiAccountDeliveryChannelResponseBodyResourceChangeDeliverySlsProperties;
  /**
   * @remarks
   * The ARN of the delivery destination.
   * 
   * @example
   * acs:log:cn-hangzhou: 1911422487776***:project/delivery/logstore/resourcecenter-sls
   */
  targetArn?: string;
  /**
   * @remarks
   * The type of the destination.
   * 
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
      slsProperties: GetMultiAccountDeliveryChannelResponseBodyResourceChangeDeliverySlsProperties,
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

