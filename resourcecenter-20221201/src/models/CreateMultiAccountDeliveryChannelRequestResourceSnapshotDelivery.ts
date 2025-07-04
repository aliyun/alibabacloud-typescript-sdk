// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMultiAccountDeliveryChannelRequestResourceSnapshotDeliverySlsProperties } from "./CreateMultiAccountDeliveryChannelRequestResourceSnapshotDeliverySlsProperties";


export class CreateMultiAccountDeliveryChannelRequestResourceSnapshotDelivery extends $dara.Model {
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
  slsProperties?: CreateMultiAccountDeliveryChannelRequestResourceSnapshotDeliverySlsProperties;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the delivery destination. Valid values:
   * 
   * *   If you set `TargetType` to `OSS`, you must set `TargetArn` to the ARN of a bucket whose name is prefixed with `resourcecenter-`. Example: `acs:oss:cn-hangzhou:191142248777****:resourcecenter-oss`.
   * *   If you set `TargetType` to `SLS`, you must set `TargetArn` to the ARN of a Logstore whose name is prefixed with `resourcecenter-`. Example: `acs:log:cn-hangzhou: 191142248777****:project/delivery/logstore/resourcecenter-sls`.
   * 
   * @example
   * acs:oss:cn-hangzhou:1911422487776***:resourcecenter-oss
   */
  targetArn?: string;
  /**
   * @remarks
   * The type of the delivery destination. Valid values:
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
      slsProperties: CreateMultiAccountDeliveryChannelRequestResourceSnapshotDeliverySlsProperties,
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

