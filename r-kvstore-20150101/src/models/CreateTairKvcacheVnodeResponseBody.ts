// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairKVCacheVNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the virtual node.
   * 
   * @example
   * tv-2zeb1ce76fee****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the virtual node.
   * 
   * @example
   * vn-03a49876edb****
   */
  nodeId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 20905403119****
   */
  orderId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BE6E619-A657-42E3-AD2D-18F8428A****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the virtual cluster.
   * 
   * @example
   * vc-16965a9267*****-*****
   */
  VClusterId?: string;
  /**
   * @remarks
   * The instance ID of the virtual cluster.
   * 
   * @example
   * tk-2ze4bba3c8fe****
   */
  vkName?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      VClusterId: 'VClusterId',
      vkName: 'VkName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'string',
      orderId: 'number',
      regionId: 'string',
      requestId: 'string',
      VClusterId: 'string',
      vkName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

