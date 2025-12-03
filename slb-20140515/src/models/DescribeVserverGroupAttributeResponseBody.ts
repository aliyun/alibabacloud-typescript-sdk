// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVServerGroupAttributeResponseBodyBackendServersBackendServer extends $dara.Model {
  /**
   * @remarks
   * The description of the server group.
   * 
   * >  This parameter is not returned if the Description parameter is not specified in the request.
   * 
   * @example
   * Server Group Description
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
   * vm-233
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.XX.XX.11
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **ecs**: ECS instance
   * *   **eni**: ENI
   * *   **eci**: elastic container instance
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
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
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

export class DescribeVServerGroupAttributeResponseBodyBackendServers extends $dara.Model {
  backendServer?: DescribeVServerGroupAttributeResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeVServerGroupAttributeResponseBodyBackendServersBackendServer },
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

export class DescribeVServerGroupAttributeResponseBodyTagsTag extends $dara.Model {
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

export class DescribeVServerGroupAttributeResponseBodyTags extends $dara.Model {
  tag?: DescribeVServerGroupAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVServerGroupAttributeResponseBodyTagsTag },
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

export class DescribeVServerGroupAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend servers.
   */
  backendServers?: DescribeVServerGroupAttributeResponseBodyBackendServers;
  /**
   * @remarks
   * The time when the CLB instance was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-jfakd****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The tags of the backend server.
   */
  tags?: DescribeVServerGroupAttributeResponseBodyTags;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The name of the vServer group.
   * 
   * @example
   * Group1
   */
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      createTime: 'CreateTime',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      tags: 'Tags',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: DescribeVServerGroupAttributeResponseBodyBackendServers,
      createTime: 'string',
      loadBalancerId: 'string',
      requestId: 'string',
      tags: DescribeVServerGroupAttributeResponseBodyTags,
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  validate() {
    if(this.backendServers && typeof (this.backendServers as any).validate === 'function') {
      (this.backendServers as any).validate();
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

