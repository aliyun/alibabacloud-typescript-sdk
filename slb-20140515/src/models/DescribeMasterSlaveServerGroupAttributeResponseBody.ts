// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer extends $dara.Model {
  description?: string;
  port?: number;
  serverId?: string;
  serverType?: string;
  type?: string;
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
  tagKey?: string;
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

