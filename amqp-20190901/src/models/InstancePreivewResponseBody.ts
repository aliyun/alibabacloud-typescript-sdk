// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstancePreivewResponseBodyDataInstancesInstancesVOPvlParamsPvlVO extends $dara.Model {
  /**
   * @example
   * epId
   */
  key?: string;
  /**
   * @example
   * ep-xxx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstancePreivewResponseBodyDataInstancesInstancesVOPvlParams extends $dara.Model {
  pvlVO?: InstancePreivewResponseBodyDataInstancesInstancesVOPvlParamsPvlVO[];
  static names(): { [key: string]: string } {
    return {
      pvlVO: 'PvlVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvlVO: { 'type': 'array', 'itemType': InstancePreivewResponseBodyDataInstancesInstancesVOPvlParamsPvlVO },
    };
  }

  validate() {
    if(Array.isArray(this.pvlVO)) {
      $dara.Model.validateArray(this.pvlVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstancePreivewResponseBodyDataInstancesInstancesVOTagsTagsVO extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstancePreivewResponseBodyDataInstancesInstancesVOTags extends $dara.Model {
  tagsVO?: InstancePreivewResponseBodyDataInstancesInstancesVOTagsTagsVO[];
  static names(): { [key: string]: string } {
    return {
      tagsVO: 'TagsVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagsVO: { 'type': 'array', 'itemType': InstancePreivewResponseBodyDataInstancesInstancesVOTagsTagsVO },
    };
  }

  validate() {
    if(Array.isArray(this.tagsVO)) {
      $dara.Model.validateArray(this.tagsVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstancePreivewResponseBodyDataInstancesInstancesVO extends $dara.Model {
  autoRenew?: boolean;
  ceaseStatus?: boolean;
  classicEndpoint?: string;
  enableDlqTtl?: boolean;
  encrypted?: boolean;
  expire?: number;
  instanceId?: string;
  instanceName?: string;
  instanceType?: string;
  invisibleTime?: number;
  kmsKeyId?: string;
  /**
   * @example
   * tcp_and_ssl
   */
  listenerMode?: string;
  maxBindingCount?: number;
  maxConnectionChannelCount?: number;
  maxConnectionCount?: number;
  maxConsumeRetryTime?: number;
  maxEIPTPS?: number;
  maxExchangeCount?: number;
  maxMsgBodyByte?: number;
  maxMsgDelayHour?: number;
  maxMsgTraceTime?: number;
  maxQueue?: number;
  maxQueueConsumerCount?: number;
  maxRetryInterval?: number;
  maxRetryTimes?: number;
  maxTPS?: number;
  maxVhost?: number;
  orderCreate?: number;
  orderType?: string;
  privateEndpoint?: string;
  /**
   * @example
   * pvl
   */
  privateEndpointType?: string;
  publicEndpoint?: string;
  pvlParams?: InstancePreivewResponseBodyDataInstancesInstancesVOPvlParams;
  resourceGroupId?: string;
  serverlessRate?: number;
  serverlessSwitch?: boolean;
  status?: string;
  storageSize?: number;
  supportEIP?: boolean;
  supportMsgTrace?: boolean;
  supportOpenSourceAuth?: boolean;
  tags?: InstancePreivewResponseBodyDataInstancesInstancesVOTags;
  usedQueue?: number;
  usedVhost?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      ceaseStatus: 'CeaseStatus',
      classicEndpoint: 'ClassicEndpoint',
      enableDlqTtl: 'EnableDlqTtl',
      encrypted: 'Encrypted',
      expire: 'Expire',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      invisibleTime: 'InvisibleTime',
      kmsKeyId: 'KmsKeyId',
      listenerMode: 'ListenerMode',
      maxBindingCount: 'MaxBindingCount',
      maxConnectionChannelCount: 'MaxConnectionChannelCount',
      maxConnectionCount: 'MaxConnectionCount',
      maxConsumeRetryTime: 'MaxConsumeRetryTime',
      maxEIPTPS: 'MaxEIPTPS',
      maxExchangeCount: 'MaxExchangeCount',
      maxMsgBodyByte: 'MaxMsgBodyByte',
      maxMsgDelayHour: 'MaxMsgDelayHour',
      maxMsgTraceTime: 'MaxMsgTraceTime',
      maxQueue: 'MaxQueue',
      maxQueueConsumerCount: 'MaxQueueConsumerCount',
      maxRetryInterval: 'MaxRetryInterval',
      maxRetryTimes: 'MaxRetryTimes',
      maxTPS: 'MaxTPS',
      maxVhost: 'MaxVhost',
      orderCreate: 'OrderCreate',
      orderType: 'OrderType',
      privateEndpoint: 'PrivateEndpoint',
      privateEndpointType: 'PrivateEndpointType',
      publicEndpoint: 'PublicEndpoint',
      pvlParams: 'PvlParams',
      resourceGroupId: 'ResourceGroupId',
      serverlessRate: 'ServerlessRate',
      serverlessSwitch: 'ServerlessSwitch',
      status: 'Status',
      storageSize: 'StorageSize',
      supportEIP: 'SupportEIP',
      supportMsgTrace: 'SupportMsgTrace',
      supportOpenSourceAuth: 'SupportOpenSourceAuth',
      tags: 'Tags',
      usedQueue: 'UsedQueue',
      usedVhost: 'UsedVhost',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      ceaseStatus: 'boolean',
      classicEndpoint: 'string',
      enableDlqTtl: 'boolean',
      encrypted: 'boolean',
      expire: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      invisibleTime: 'number',
      kmsKeyId: 'string',
      listenerMode: 'string',
      maxBindingCount: 'number',
      maxConnectionChannelCount: 'number',
      maxConnectionCount: 'number',
      maxConsumeRetryTime: 'number',
      maxEIPTPS: 'number',
      maxExchangeCount: 'number',
      maxMsgBodyByte: 'number',
      maxMsgDelayHour: 'number',
      maxMsgTraceTime: 'number',
      maxQueue: 'number',
      maxQueueConsumerCount: 'number',
      maxRetryInterval: 'number',
      maxRetryTimes: 'number',
      maxTPS: 'number',
      maxVhost: 'number',
      orderCreate: 'number',
      orderType: 'string',
      privateEndpoint: 'string',
      privateEndpointType: 'string',
      publicEndpoint: 'string',
      pvlParams: InstancePreivewResponseBodyDataInstancesInstancesVOPvlParams,
      resourceGroupId: 'string',
      serverlessRate: 'number',
      serverlessSwitch: 'boolean',
      status: 'string',
      storageSize: 'number',
      supportEIP: 'boolean',
      supportMsgTrace: 'boolean',
      supportOpenSourceAuth: 'boolean',
      tags: InstancePreivewResponseBodyDataInstancesInstancesVOTags,
      usedQueue: 'number',
      usedVhost: 'number',
      version: 'number',
    };
  }

  validate() {
    if(this.pvlParams && typeof (this.pvlParams as any).validate === 'function') {
      (this.pvlParams as any).validate();
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

export class InstancePreivewResponseBodyDataInstances extends $dara.Model {
  instancesVO?: InstancePreivewResponseBodyDataInstancesInstancesVO[];
  static names(): { [key: string]: string } {
    return {
      instancesVO: 'InstancesVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancesVO: { 'type': 'array', 'itemType': InstancePreivewResponseBodyDataInstancesInstancesVO },
    };
  }

  validate() {
    if(Array.isArray(this.instancesVO)) {
      $dara.Model.validateArray(this.instancesVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstancePreivewResponseBodyData extends $dara.Model {
  exchangeNum?: number;
  instanceNum?: number;
  instances?: InstancePreivewResponseBodyDataInstances;
  queueNum?: number;
  vhostNum?: number;
  static names(): { [key: string]: string } {
    return {
      exchangeNum: 'ExchangeNum',
      instanceNum: 'InstanceNum',
      instances: 'Instances',
      queueNum: 'QueueNum',
      vhostNum: 'VhostNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchangeNum: 'number',
      instanceNum: 'number',
      instances: InstancePreivewResponseBodyDataInstances,
      queueNum: 'number',
      vhostNum: 'number',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstancePreivewResponseBody extends $dara.Model {
  code?: number;
  data?: InstancePreivewResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: InstancePreivewResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

