// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultiAccountDeliveryChannelResponseBodyResourceSnapshotDeliverySlsProperties } from "./GetMultiAccountDeliveryChannelResponseBodyResourceSnapshotDeliverySlsProperties";


export class GetMultiAccountDeliveryChannelResponseBodyResourceSnapshotDelivery extends $dara.Model {
  /**
   * @example
   * select * from resources limit 100;
   */
  customExpression?: string;
  /**
   * @example
   * 09:00Z
   */
  deliveryTime?: string;
  slsProperties?: GetMultiAccountDeliveryChannelResponseBodyResourceSnapshotDeliverySlsProperties;
  /**
   * @example
   * acs:oss:cn-hangzhou:1911422487776***:resourcecenter-oss
   */
  targetArn?: string;
  /**
   * @example
   * OSS
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      customExpression: 'CustomExpression',
      deliveryTime: 'DeliveryTime',
      slsProperties: 'SlsProperties',
      targetArn: 'TargetArn',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExpression: 'string',
      deliveryTime: 'string',
      slsProperties: GetMultiAccountDeliveryChannelResponseBodyResourceSnapshotDeliverySlsProperties,
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

