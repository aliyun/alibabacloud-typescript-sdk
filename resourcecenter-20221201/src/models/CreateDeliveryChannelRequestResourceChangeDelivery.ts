// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDeliveryChannelRequestResourceChangeDeliverySlsProperties } from "./CreateDeliveryChannelRequestResourceChangeDeliverySlsProperties";


export class CreateDeliveryChannelRequestResourceChangeDelivery extends $dara.Model {
  /**
   * @remarks
   * The Simple Log Service configurations.
   */
  slsProperties?: CreateDeliveryChannelRequestResourceChangeDeliverySlsProperties;
  /**
   * @remarks
   * The ARN of the delivery destination.
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
   * *   `SLS`
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

