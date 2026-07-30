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
   * The dedicated device storage capacity.
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
   * The cloud phone instance information.
   */
  instanceInfos?: ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos[];
  /**
   * @remarks
   * The cloud phone matrix ID.
   * 
   * @example
   * cpn-e5kxgjyt8s1mb****
   */
  nodeId?: string;
  /**
   * @remarks
   * When the matrix uses dedicated device storage, a 64 GiB shared storage space is allocated by default (not modifiable) for storing images and other matrix-wide files. When the matrix uses shared device storage (with the size specified at purchase), this storage space is shared by all instances.
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
   * The cloud phone matrix information.
   */
  nodeInfos?: ChangeCloudPhoneNodeResponseBodyNodeInfos[];
  /**
   * @remarks
   * The generated order ID.
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

