// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudPhoneNodeResponseBodyNetworkPackageOrderModel extends $dara.Model {
  bandwidthPackageId?: string;
  bandwidthPackageOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthPackageOrderId: 'BandwidthPackageOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      bandwidthPackageOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudPhoneNodeResponseBodyNodeInfos extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the cloud phone matrix.
   * 
   * @example
   * cpn-e5kxgjyt8s1mb****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      nodeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudPhoneNodeResponseBody extends $dara.Model {
  networkPackageOrderModel?: CreateCloudPhoneNodeResponseBodyNetworkPackageOrderModel;
  /**
   * @remarks
   * The cloud phone matrixes.
   */
  nodeInfos?: CreateCloudPhoneNodeResponseBodyNodeInfos[];
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 223684716098****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageOrderModel: 'NetworkPackageOrderModel',
      nodeInfos: 'NodeInfos',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageOrderModel: CreateCloudPhoneNodeResponseBodyNetworkPackageOrderModel,
      nodeInfos: { 'type': 'array', 'itemType': CreateCloudPhoneNodeResponseBodyNodeInfos },
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.networkPackageOrderModel && typeof (this.networkPackageOrderModel as any).validate === 'function') {
      (this.networkPackageOrderModel as any).validate();
    }
    if(Array.isArray(this.nodeInfos)) {
      $dara.Model.validateArray(this.nodeInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

