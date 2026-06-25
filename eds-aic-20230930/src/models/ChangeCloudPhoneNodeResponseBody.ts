// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cpn-jewjt8xryuitu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The internal storage capacity, in GiB.
   * 
   * @example
   * 200
   */
  phoneDataVolume?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phoneDataVolume: 'PhoneDataVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phoneDataVolume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCloudPhoneNodeResponseBodyNodeInfos extends $dara.Model {
  /**
   * @remarks
   * Information about the cloud phone instances.
   */
  instanceInfos?: ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos[];
  /**
   * @remarks
   * The ID of the cloud phone matrix.
   * 
   * @example
   * cpn-e5kxgjyt8s1mb****
   */
  nodeId?: string;
  /**
   * @remarks
   * The size of the shared storage, in GiB. If the matrix uses independent internal storage, this defaults to a fixed 64 GiB for global files, such as images. If the matrix was configured with shared storage at purchase, this indicates the size of that storage.
   * 
   * @example
   * 100
   */
  shareDataVolume?: number;
  static names(): { [key: string]: string } {
    return {
      instanceInfos: 'InstanceInfos',
      nodeId: 'NodeId',
      shareDataVolume: 'ShareDataVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfos: { 'type': 'array', 'itemType': ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos },
      nodeId: 'string',
      shareDataVolume: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceInfos)) {
      $dara.Model.validateArray(this.instanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCloudPhoneNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Information about the modified cloud phone matrix.
   */
  nodeInfos?: ChangeCloudPhoneNodeResponseBodyNodeInfos[];
  /**
   * @remarks
   * The ID of the order for this change.
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
   * 4610632D-D661-5982-B3D7-5D3FD183F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeInfos: 'NodeInfos',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfos: { 'type': 'array', 'itemType': ChangeCloudPhoneNodeResponseBodyNodeInfos },
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfos)) {
      $dara.Model.validateArray(this.nodeInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

