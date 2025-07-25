// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeliveryChannelResponseBodyResourceChangeDeliverySlsProperties } from "./GetDeliveryChannelResponseBodyResourceChangeDeliverySlsProperties";


export class GetDeliveryChannelResponseBodyResourceChangeDelivery extends $dara.Model {
  /**
   * @remarks
   * The Simple Log Service configurations.
   */
  slsProperties?: GetDeliveryChannelResponseBodyResourceChangeDeliverySlsProperties;
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
      slsProperties: GetDeliveryChannelResponseBodyResourceChangeDeliverySlsProperties,
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

