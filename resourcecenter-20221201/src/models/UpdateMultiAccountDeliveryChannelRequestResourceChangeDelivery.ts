// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMultiAccountDeliveryChannelRequestResourceChangeDeliverySlsProperties } from "./UpdateMultiAccountDeliveryChannelRequestResourceChangeDeliverySlsProperties";


export class UpdateMultiAccountDeliveryChannelRequestResourceChangeDelivery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable delivery of resource configuration change events. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @remarks
   * The Simple Log Service configurations.
   */
  slsProperties?: UpdateMultiAccountDeliveryChannelRequestResourceChangeDeliverySlsProperties;
  /**
   * @remarks
   * The ARN of the delivery destination. Valid values:
   * 
   * *   If you set `TargetType` to `OSS`, you must set `TargetArn` to the ARN of a bucket whose name is prefixed with `resourcecenter-`.
   * *   If you set `TargetType` to `SLS`, you must set `TargetArn` to the ARN of a Logstore whose name is prefixed with `resourcecenter-`.
   * 
   * @example
   * acs:log:cn-hangzhou: 1911422487776***:project/delivery/logstore/resourcecenter-sls
   */
  targetArn?: string;
  /**
   * @remarks
   * The type of the delivery destination.
   * 
   * Set the value to `SLS`.
   * 
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

