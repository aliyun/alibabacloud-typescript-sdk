// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllInstancesResponseBodyDataAttributes extends $dara.Model {
  /**
   * @remarks
   * information key
   * 
   * @example
   * sysom
   */
  infoKey?: string;
  /**
   * @remarks
   * information type
   * 
   * @example
   * instance_tag
   */
  infoType?: string;
  /**
   * @remarks
   * information value
   * 
   * @example
   * diagnosis
   */
  infoValue?: string;
  static names(): { [key: string]: string } {
    return {
      infoKey: 'infoKey',
      infoType: 'infoType',
      infoValue: 'infoValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoKey: 'string',
      infoType: 'string',
      infoValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent configuration ID
   * 
   * @example
   * test_id
   */
  agentConfigId?: string;
  /**
   * @remarks
   * Agent configuration name
   * 
   * @example
   * test_name
   */
  agentConfigName?: string;
  /**
   * @remarks
   * Extension information.
   */
  attributes?: ListAllInstancesResponseBodyDataAttributes[];
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * 3b24a621-acb3-11ef-8c90-00163e1029af
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * zjk_vpc_domain_1
   */
  clusterName?: string;
  /**
   * @remarks
   * Image ID.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20250117.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * Installation level
   * 
   * @example
   * Cluster
   */
  installLevel?: string;
  /**
   * @remarks
   * Installation type
   * 
   * @example
   * console
   */
  installType?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * i-bp17uabeke9v7n30abm2
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * Instance type
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * Milvus version
   * 
   * @example
   * 5.10.134-18.al8.x86_64
   */
  kernelVersion?: string;
  /**
   * @remarks
   * Management level
   * 
   * @example
   * cluster
   */
  manageLevel?: string;
  /**
   * @remarks
   * Management type
   * 
   * @example
   * managed
   */
  manageType?: string;
  /**
   * @remarks
   * Operating system architecture
   * 
   * @example
   * x86_64
   */
  osArch?: string;
  /**
   * @remarks
   * Operating system health score
   * 
   * @example
   * 100
   */
  osHealthScore?: number;
  /**
   * @remarks
   * Operating system name
   * 
   * @example
   * alios
   */
  osName?: string;
  /**
   * @remarks
   * Private IP address.
   * 
   * @example
   * 172.21.172.7
   */
  privateIp?: string;
  /**
   * @remarks
   * Public IP address.
   * 
   * @example
   * 47.98.215.58
   */
  publicIp?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 3b24a621-acb3-11ef-8c90-00163e1029af
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource group name
   * 
   * @example
   * xxxx
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The running status of the instance. Valid values:
   * - **Running**: The instance is running.
   * - **Offline**: The instance is offline.
   * 
   * > An instance in the Offline state indicates that the heartbeat from the edge zone to the SysOM Server has been lost. It does not mean that the corresponding ECS instance is not running.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentConfigId: 'agentConfigId',
      agentConfigName: 'agentConfigName',
      attributes: 'attributes',
      clusterId: 'clusterId',
      clusterName: 'clusterName',
      imageId: 'imageId',
      installLevel: 'installLevel',
      installType: 'installType',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      instanceType: 'instanceType',
      kernelVersion: 'kernelVersion',
      manageLevel: 'manageLevel',
      manageType: 'manageType',
      osArch: 'osArch',
      osHealthScore: 'osHealthScore',
      osName: 'osName',
      privateIp: 'privateIp',
      publicIp: 'publicIp',
      resourceGroupId: 'resourceGroupId',
      resourceGroupName: 'resourceGroupName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentConfigId: 'string',
      agentConfigName: 'string',
      attributes: { 'type': 'array', 'itemType': ListAllInstancesResponseBodyDataAttributes },
      clusterId: 'string',
      clusterName: 'string',
      imageId: 'string',
      installLevel: 'string',
      installType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      kernelVersion: 'string',
      manageLevel: 'string',
      manageType: 'string',
      osArch: 'string',
      osHealthScore: 'number',
      osName: 'string',
      privateIp: 'string',
      publicIp: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   */
  data?: ListAllInstancesResponseBodyData[];
  /**
   * @remarks
   * Maximum number of returned items
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Error message:
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the error message of the request.
   * 
   * @example
   * instance not exists
   */
  message?: string;
  /**
   * @remarks
   * Paging cursor.
   * 
   * > If not empty, more data is available.
   * 
   * @example
   * c2f78a783f49457caba6bace6f6f79e4
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of query results.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAllInstancesResponseBodyData },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

