// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer extends $dara.Model {
  /**
   * @remarks
   * The description of the primary/secondary server group.
   * 
   * @example
   * Primary and secondary server group description
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server.
   * 
   * @example
   * 90
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * eni-hhshhs****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server. Valid values: **Master** and **Slave**.
   * 
   * @example
   * Slave
   */
  serverType?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **ecs** (default): Elastic Compute Service (ECS) instance
   * *   **eni**: elastic network interface (ENI)
   * *   **eci**: elastic container instance
   * 
   * @example
   * eni
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverType: 'ServerType',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverType: 'string',
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

export class DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServers extends $dara.Model {
  masterSlaveBackendServer?: DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer[];
  static names(): { [key: string]: string } {
    return {
      masterSlaveBackendServer: 'MasterSlaveBackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveBackendServer: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer },
    };
  }

  validate() {
    if(Array.isArray(this.masterSlaveBackendServer)) {
      $dara.Model.validateArray(this.masterSlaveBackendServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: **1** to **20**. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1** to **20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestValue
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

export class DescribeMasterSlaveServerGroupAttributeResponseBodyTags extends $dara.Model {
  tag?: DescribeMasterSlaveServerGroupAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupAttributeResponseBodyTagsTag },
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

export class DescribeMasterSlaveServerGroupAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the CLB instance was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-12-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the associated CLB instance.
   * 
   * @example
   * lb-14fadafw4343a******
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * A list of backend servers in the primary/secondary server group.
   */
  masterSlaveBackendServers?: DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServers;
  /**
   * @remarks
   * The ID of the primary/secondary server group.
   * 
   * @example
   * rsp-cige6******
   */
  masterSlaveServerGroupId?: string;
  /**
   * @remarks
   * The name of the primary/secondary server group.
   * 
   * @example
   * Group1
   */
  masterSlaveServerGroupName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B0******
   */
  requestId?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: DescribeMasterSlaveServerGroupAttributeResponseBodyTags;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveBackendServers: 'MasterSlaveBackendServers',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      masterSlaveServerGroupName: 'MasterSlaveServerGroupName',
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      loadBalancerId: 'string',
      masterSlaveBackendServers: DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServers,
      masterSlaveServerGroupId: 'string',
      masterSlaveServerGroupName: 'string',
      requestId: 'string',
      tags: DescribeMasterSlaveServerGroupAttributeResponseBodyTags,
    };
  }

  validate() {
    if(this.masterSlaveBackendServers && typeof (this.masterSlaveBackendServers as any).validate === 'function') {
      (this.masterSlaveBackendServers as any).validate();
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

