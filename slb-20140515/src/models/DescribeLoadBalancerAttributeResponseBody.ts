// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer extends $dara.Model {
  /**
   * @remarks
   * The description of the backend server.
   * 
   * > This parameter is not returned if Description is not set.
   * 
   * @example
   * backend server description
   */
  description?: string;
  /**
   * @remarks
   * The backend server ID.
   * 
   * @example
   * i-2zej4lxhjoq1icu*****
   */
  serverId?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI) or elastic container instance.
   * 
   * @example
   * 192.XX.XX.11
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of the backend server.
   * 
   * @example
   * ecs
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 90
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      serverId: 'string',
      serverIp: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyBackendServers extends $dara.Model {
  backendServer?: DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer },
    };
  }

  validate() {
    if(Array.isArray(this.backendServer)) {
      $dara.Model.validateArray(this.backendServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPorts extends $dara.Model {
  listenerPort?: number[];
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.listenerPort)) {
      $dara.Model.validateArray(this.listenerPort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocalListenerPortAndProtocal extends $dara.Model {
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the CLB instance.
   * 
   * @example
   * http
   */
  listenerProtocal?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocal: 'ListenerProtocal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal extends $dara.Model {
  listenerPortAndProtocal?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocalListenerPortAndProtocal[];
  static names(): { [key: string]: string } {
    return {
      listenerPortAndProtocal: 'ListenerPortAndProtocal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPortAndProtocal: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocalListenerPortAndProtocal },
    };
  }

  validate() {
    if(Array.isArray(this.listenerPortAndProtocal)) {
      $dara.Model.validateArray(this.listenerPortAndProtocal);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocolListenerPortAndProtocol extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the listener is enabled.
   * 
   * @example
   * Listener Description
   */
  description?: string;
  /**
   * @remarks
   * The destination listening port to which requests are forwarded. The port must be open and use HTTPS.
   * 
   * @example
   * 443
   */
  forwardPort?: number;
  /**
   * @remarks
   * Indicates whether the listener is enabled.
   * 
   * @example
   * on
   */
  listenerForward?: string;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the CLB instance.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      forwardPort: 'ForwardPort',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      forwardPort: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol extends $dara.Model {
  listenerPortAndProtocol?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocolListenerPortAndProtocol[];
  static names(): { [key: string]: string } {
    return {
      listenerPortAndProtocol: 'ListenerPortAndProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPortAndProtocol: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocolListenerPortAndProtocol },
    };
  }

  validate() {
    if(Array.isArray(this.listenerPortAndProtocol)) {
      $dara.Model.validateArray(this.listenerPortAndProtocol);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: **1** to **20**. The tag key cannot be an empty string.
   * 
   * The tag key can be at most 64 characters in length, and cannot contain `http://` or `https://`. It must not start with `aliyun` or `acs:`.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1** to **20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyTags extends $dara.Model {
  tag?: DescribeLoadBalancerAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service IP address of the CLB instance.
   * 
   * @example
   * 42.XX.XX.6
   */
  address?: string;
  /**
   * @remarks
   * The version of the IP address. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The address type of the CLB instance.
   * 
   * @example
   * internet
   */
  addressType?: string;
  /**
   * @remarks
   * The timestamp generated when the CLB instance is released.
   * 
   * @example
   * 1513947075000
   */
  autoReleaseTime?: number;
  /**
   * @remarks
   * The backend servers of the CLB instance.
   */
  backendServers?: DescribeLoadBalancerAttributeResponseBodyBackendServers;
  /**
   * @remarks
   * The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The time when the CLB instance was created. The time is in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2017-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp generated when the CA certificate is uploaded.
   * 
   * @example
   * 1504147745000
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the CLB instance.
   * 
   * Valid values: **on** and **off**.
   * 
   * @example
   * off
   */
  deleteProtection?: string;
  /**
   * @remarks
   * The time when the CLB instance expires.
   * 
   * @example
   * 2022-09-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The timestamp that indicates the expiration time of the CLB instance.
   * 
   * @example
   * 32493801600000
   */
  endTimeStamp?: number;
  /**
   * @remarks
   * The metering method of the CLB instance. Valid values:
   * 
   * *   **PayBySpec** (default)
   * *   **PayByCLCU**
   * 
   * > This parameter is available only on the China site and takes effect only when **PayType** is set to **PayOnDemand**.
   * 
   * @example
   * PayBySpec
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Internet-facing CLB instance. Valid values:
   * 
   * *   **paybytraffic**
   * *   **paybybandwidth**
   * 
   * @example
   * paybytraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The frontend port used by the CLB instance.
   */
  listenerPorts?: DescribeLoadBalancerAttributeResponseBodyListenerPorts;
  /**
   * @remarks
   * The ports or protocols of the listeners.
   */
  listenerPortsAndProtocal?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal;
  /**
   * @remarks
   * The ports or protocols of the listeners.
   */
  listenerPortsAndProtocol?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * lb-bp1b6c719dfa08ex****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the CLB instance.
   * 
   * @example
   * lb-instance-test
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The specification of the CLB instance.
   * 
   * >  Pay-as-you-go CLB instances are not subject to specifications. By default, **slb.lcu.elastic** is returned.
   * 
   * @example
   * slb.s1.small
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The status of the CLB instance. Valid values:
   * 
   * *   **inactive**: The CLB instance is disabled. CLB instances in the inactive state do not forward traffic.
   * *   **active**: The CLB instance is running as expected. Newly created CLB instances are in the **active** state by default.
   * *   **locked**: The CLB instance is locked. CLB instances may be locked due to overdue payments or other reasons.
   * 
   * @example
   * active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The ID of the primary zone to which the CLB instance belongs.
   * 
   * @example
   * cn-hangzhou-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The reason why the configuration read-only mode is enabled. The value is 1 to 80 characters in length. It starts with a letter and can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * >  This parameter is valid only when **ModificationProtectionStatus** is set to **ConsoleProtection**.
   * 
   * @example
   * Managed instance
   */
  modificationProtectionReason?: string;
  /**
   * @remarks
   * Indicates whether the configuration read-only mode is enabled. Valid values:
   * 
   * *   **NonProtection**: The configuration read-only mode is disabled. After you disable the configuration read-only mode, the value of **ModificationProtectionReason** is cleared.
   * *   **ConsoleProtection**: The configuration read-only mode is enabled.
   * 
   * >  If this parameter is set to **ConsoleProtection**, you cannot modify instance configurations in the CLB console. However, you can modify instance configurations by calling API operations.
   * 
   * @example
   * ConsoleProtection
   */
  modificationProtectionStatus?: string;
  /**
   * @remarks
   * The network type of the CLB instance.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the CLB instance. Valid values:
   * 
   * *   Only **PayOnDemand** may be returned, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PayOnDemand
   */
  payType?: string;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The alias of the region to which the CLB instance belongs.
   * 
   * @example
   * hangzhou
   */
  regionIdAlias?: string;
  /**
   * @remarks
   * The auto-renewal cycle. Valid values: **Year** and **Month**. Default value: Month.
   * 
   * >  This parameter is valid only if you create a subscription CLB instance on the Alibaba Cloud China site. In this case, **PayType** must be set to **PrePay** and **RenewalStatus** must be set to **AutoRenewal**.
   * 
   * @example
   * Month
   */
  renewalCycUnit?: string;
  /**
   * @remarks
   * The auto-renewal duration. This parameter is valid only if **RenewalStatus** is set to **AutoRenewal**.
   * 
   * *   Valid values when **PeriodUnit** is set to **Year**: **1**~**5**.
   * 
   * *   Valid values when **PeriodUnit** is set to **Month**: **1**~ **9**.
   * 
   * > This parameter is valid only when you create a subscription CLB instance on the Alibaba Cloud China site. In this case, the **PayType** parameter must be set to **PrePay**.
   * 
   * @example
   * 1
   */
  renewalDuration?: number;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled. Valid values:
   * 
   * *   **AutoRenewal**: Auto-renewal is enabled.
   * 
   * *   **Normal**: Auto-renewal is disabled. You must manually renew the CLB instance.
   * 
   * *   **NotRenewal**: The CLB instance will not be renewed upon expiration. If this value is returned, the system does not send notifications until three days before the expiration date.
   * 
   *     **
   * 
   *     **Note** This parameter is valid only when you create a subscription CLB instance on the Alibaba Cloud China site. In this case, **PayType** must be set to **PrePay**.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the secondary zone to which the CLB instance belongs.
   * 
   * @example
   * cn-hangzhou-d
   */
  slaveZoneId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeLoadBalancerAttributeResponseBodyTags;
  /**
   * @remarks
   * The ID of the vSwitch to which the internal-facing CLB instance belongs.
   * 
   * @example
   * vsw-255ecrwq5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
   * 
   * @example
   * vpc-25dvzy9f8****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      autoReleaseTime: 'AutoReleaseTime',
      backendServers: 'BackendServers',
      bandwidth: 'Bandwidth',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      deleteProtection: 'DeleteProtection',
      endTime: 'EndTime',
      endTimeStamp: 'EndTimeStamp',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      listenerPorts: 'ListenerPorts',
      listenerPortsAndProtocal: 'ListenerPortsAndProtocal',
      listenerPortsAndProtocol: 'ListenerPortsAndProtocol',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      loadBalancerStatus: 'LoadBalancerStatus',
      masterZoneId: 'MasterZoneId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      networkType: 'NetworkType',
      payType: 'PayType',
      regionId: 'RegionId',
      regionIdAlias: 'RegionIdAlias',
      renewalCycUnit: 'RenewalCycUnit',
      renewalDuration: 'RenewalDuration',
      renewalStatus: 'RenewalStatus',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      slaveZoneId: 'SlaveZoneId',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      autoReleaseTime: 'number',
      backendServers: DescribeLoadBalancerAttributeResponseBodyBackendServers,
      bandwidth: 'number',
      createTime: 'string',
      createTimeStamp: 'number',
      deleteProtection: 'string',
      endTime: 'string',
      endTimeStamp: 'number',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      listenerPorts: DescribeLoadBalancerAttributeResponseBodyListenerPorts,
      listenerPortsAndProtocal: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal,
      listenerPortsAndProtocol: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol,
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      loadBalancerStatus: 'string',
      masterZoneId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      networkType: 'string',
      payType: 'string',
      regionId: 'string',
      regionIdAlias: 'string',
      renewalCycUnit: 'string',
      renewalDuration: 'number',
      renewalStatus: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      slaveZoneId: 'string',
      tags: DescribeLoadBalancerAttributeResponseBodyTags,
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.backendServers && typeof (this.backendServers as any).validate === 'function') {
      (this.backendServers as any).validate();
    }
    if(this.listenerPorts && typeof (this.listenerPorts as any).validate === 'function') {
      (this.listenerPorts as any).validate();
    }
    if(this.listenerPortsAndProtocal && typeof (this.listenerPortsAndProtocal as any).validate === 'function') {
      (this.listenerPortsAndProtocal as any).validate();
    }
    if(this.listenerPortsAndProtocol && typeof (this.listenerPortsAndProtocol as any).validate === 'function') {
      (this.listenerPortsAndProtocol as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

