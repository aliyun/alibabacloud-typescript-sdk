// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairKVCacheVNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Tair VNode instance.
   * 
   * @example
   * tv-2zeb1ce76fee****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the VNode.
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
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2BE6E619-A657-42E3-AD2D-18F8428A****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the VCluster.
   * 
   * @example
   * vc-16965a9267*****-*****
   */
  VClusterId?: string;
  /**
   * @remarks
   * The ID of the VCluster instance.
   * 
   * @example
   * tk-2ze4bba3c8fe****
   */
  vkName?: string;
  /**
   * @remarks
   * The zone ID of the instance.
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

