// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExpressConnectTrafficQosRequestAddInstanceList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the instance to associate.
   * 
   * @example
   * pc-bp159zj8zujwy3p07****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance to associate. Valid values: **PHYSICALCONNECTION**: Express Connect circuit.
   * 
   * @example
   * PHYSICALCONNECTION
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressConnectTrafficQosRequestRemoveInstanceList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the associated instance.
   * 
   * @example
   * pc-bp1j37am632492qzw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the associated instance. Valid values: **PHYSICALCONNECTION**: Express Connect circuit.
   * 
   * @example
   * PHYSICALCONNECTION
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressConnectTrafficQosRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instances to add in this update. You do not need to specify this parameter if no instances need to be added.
   * 
   * **if can be null:**
   * false
   */
  addInstanceList?: ModifyExpressConnectTrafficQosRequestAddInstanceList[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The description of the QoS policy.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-test
   */
  qosDescription?: string;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-2giu0a6vd5x0mv****
   */
  qosId?: string;
  /**
   * @remarks
   * The name of the QoS policy.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-test
   */
  qosName?: string;
  /**
   * @remarks
   * The region ID of the QoS policy.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The list of instances to remove in this update. You do not need to specify this parameter if no instances need to be removed.
   */
  removeInstanceList?: ModifyExpressConnectTrafficQosRequestRemoveInstanceList[];
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      addInstanceList: 'AddInstanceList',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosDescription: 'QosDescription',
      qosId: 'QosId',
      qosName: 'QosName',
      regionId: 'RegionId',
      removeInstanceList: 'RemoveInstanceList',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addInstanceList: { 'type': 'array', 'itemType': ModifyExpressConnectTrafficQosRequestAddInstanceList },
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      qosDescription: 'string',
      qosId: 'string',
      qosName: 'string',
      regionId: 'string',
      removeInstanceList: { 'type': 'array', 'itemType': ModifyExpressConnectTrafficQosRequestRemoveInstanceList },
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addInstanceList)) {
      $dara.Model.validateArray(this.addInstanceList);
    }
    if(Array.isArray(this.removeInstanceList)) {
      $dara.Model.validateArray(this.removeInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

