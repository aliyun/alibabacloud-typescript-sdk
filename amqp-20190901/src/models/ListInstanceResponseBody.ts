// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResponseBodyDataInstancesTagsTags extends $dara.Model {
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

export class ListInstanceResponseBodyDataInstancesTags extends $dara.Model {
  tags?: ListInstanceResponseBodyDataInstancesTagsTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': ListInstanceResponseBodyDataInstancesTagsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyDataInstances extends $dara.Model {
  autoRenew?: boolean;
  classicEndpoint?: string;
  expire?: number;
  instanceId?: string;
  instanceName?: string;
  instanceType?: string;
  maxEIPTPS?: number;
  maxQueue?: number;
  maxTPS?: number;
  maxVhost?: number;
  orderCreate?: number;
  orderType?: string;
  privateEndpoint?: string;
  publicEndpoint?: string;
  status?: string;
  storageSize?: number;
  supportEIP?: boolean;
  tags?: ListInstanceResponseBodyDataInstancesTags;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      classicEndpoint: 'ClassicEndpoint',
      expire: 'Expire',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      maxEIPTPS: 'MaxEIPTPS',
      maxQueue: 'MaxQueue',
      maxTPS: 'MaxTPS',
      maxVhost: 'MaxVhost',
      orderCreate: 'OrderCreate',
      orderType: 'OrderType',
      privateEndpoint: 'PrivateEndpoint',
      publicEndpoint: 'PublicEndpoint',
      status: 'Status',
      storageSize: 'StorageSize',
      supportEIP: 'SupportEIP',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      classicEndpoint: 'string',
      expire: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      maxEIPTPS: 'number',
      maxQueue: 'number',
      maxTPS: 'number',
      maxVhost: 'number',
      orderCreate: 'number',
      orderType: 'string',
      privateEndpoint: 'string',
      publicEndpoint: 'string',
      status: 'string',
      storageSize: 'number',
      supportEIP: 'boolean',
      tags: ListInstanceResponseBodyDataInstancesTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyData extends $dara.Model {
  instances?: ListInstanceResponseBodyDataInstances[];
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstanceResponseBodyDataInstances },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $dara.Model {
  code?: number;
  data?: ListInstanceResponseBodyData;
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
      data: ListInstanceResponseBodyData,
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

