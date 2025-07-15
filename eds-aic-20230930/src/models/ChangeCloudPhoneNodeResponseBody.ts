// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos extends $dara.Model {
  /**
   * @example
   * cpn-jewjt8xryuitu****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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
  instanceInfos?: ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos[];
  /**
   * @example
   * cpn-e5kxgjyt8s1mb****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceInfos: 'InstanceInfos',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfos: { 'type': 'array', 'itemType': ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos },
      nodeId: 'string',
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
  nodeInfos?: ChangeCloudPhoneNodeResponseBodyNodeInfos[];
  /**
   * @example
   * 4610632D-D661-5982-B3D7-5D3FD183F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeInfos: 'NodeInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfos: { 'type': 'array', 'itemType': ChangeCloudPhoneNodeResponseBodyNodeInfos },
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

