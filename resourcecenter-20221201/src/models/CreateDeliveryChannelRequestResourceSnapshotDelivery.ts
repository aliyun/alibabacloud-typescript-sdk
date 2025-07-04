// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDeliveryChannelRequestResourceSnapshotDeliverySlsProperties } from "./CreateDeliveryChannelRequestResourceSnapshotDeliverySlsProperties";


export class CreateDeliveryChannelRequestResourceSnapshotDelivery extends $dara.Model {
  /**
   * @remarks
   * The custom expression.
   * 
   * @example
   * select * from resources limit 100;
   */
  customExpression?: string;
  /**
   * @remarks
   * The delivery time.
   * 
   * @example
   * 09:00Z
   */
  deliveryTime?: string;
  /**
   * @remarks
   * The Simple Log Service configurations.
   */
  slsProperties?: CreateDeliveryChannelRequestResourceSnapshotDeliverySlsProperties;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the delivery destination.
   * 
   * *   If you set `TargetType` to `OSS`, you must set `TargetArn` to the ARN of a bucket whose name is prefixed with resourcecenter-.
   * *   If you set `TargetType` to `SLS`, you must set `TargetArn` to the ARN of a Logstore whose name is prefixed with resourcecenter-.
   * 
   * @example
   * acs:log:cn-hangzhou: 191142248777****:project/delivery/logstore/resourcecenter-sls
   */
  targetArn?: string;
  /**
   * @remarks
   * The type of the delivery destination.
   * 
   * Valid values:
   * 
   * *   `OSS` for standard delivery
   * *   `OSS` or `SLS` for custom delivery
   * 
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
      slsProperties: CreateDeliveryChannelRequestResourceSnapshotDeliverySlsProperties,
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

