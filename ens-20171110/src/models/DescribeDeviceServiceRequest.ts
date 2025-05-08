// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * a2bac6f4-75dc-455e-8389-2dc8e47526d3
   */
  appId?: string;
  /**
   * @remarks
   * This parameter does not take effect.
   * 
   * @example
   * cn-chongqing-10
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-5sg1owx0g4ojy66ab2tez77r2
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 2661b1dd-3453-418d-8182-bb34f79e8d3c
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) node.
   * 
   * @example
   * cn-chongqing-11
   */
  regionId?: string;
  /**
   * @remarks
   * Service ID
   * 
   * @example
   * s-cxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      orderId: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

