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
   * The dedicated local storage capacity.
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
   * The information about the cloud phone instances.
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
   * When the matrix uses dedicated local storage, 64 GiB of shared storage space is allocated by default and cannot be modified. This space is used to store global files for the matrix, such as images. When the matrix uses shared local storage, the size is specified during purchase and the storage space is shared among all instances.
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
   * The information about the cloud phone matrix.
   */
  nodeInfos?: ChangeCloudPhoneNodeResponseBodyNodeInfos[];
  /**
   * @remarks
   * The ID of the generated order.
   * 
   * @example
   * 223684716098****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
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

