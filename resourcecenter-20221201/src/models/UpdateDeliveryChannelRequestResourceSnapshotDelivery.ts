// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDeliveryChannelRequestResourceSnapshotDeliverySlsProperties } from "./UpdateDeliveryChannelRequestResourceSnapshotDeliverySlsProperties";


export class UpdateDeliveryChannelRequestResourceSnapshotDelivery extends $dara.Model {
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
  /**
   * @example
   * true
   */
  enabled?: string;
  slsProperties?: UpdateDeliveryChannelRequestResourceSnapshotDeliverySlsProperties;
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
      enabled: 'Enabled',
      slsProperties: 'SlsProperties',
      targetArn: 'TargetArn',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExpression: 'string',
      deliveryTime: 'string',
      enabled: 'string',
      slsProperties: UpdateDeliveryChannelRequestResourceSnapshotDeliverySlsProperties,
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

