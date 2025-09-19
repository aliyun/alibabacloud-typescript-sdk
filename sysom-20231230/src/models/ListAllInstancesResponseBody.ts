// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllInstancesResponseBodyDataAttributes extends $dara.Model {
  /**
   * @example
   * sysom
   */
  infoKey?: string;
  /**
   * @example
   * instance_tag
   */
  infoType?: string;
  /**
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
  agentConfigId?: string;
  agentConfigName?: string;
  attributes?: ListAllInstancesResponseBodyDataAttributes[];
  /**
   * @example
   * 3b24a621-acb3-11ef-8c90-00163e1029af
   */
  clusterId?: string;
  /**
   * @example
   * zjk_vpc_domain_1
   */
  clusterName?: string;
  /**
   * @example
   * aliyun_3_x64_20G_alibase_20250117.vhd
   */
  imageId?: string;
  /**
   * @example
   * Cluster
   */
  installLevel?: string;
  /**
   * @example
   * console
   */
  installType?: string;
  /**
   * @example
   * i-bp17uabeke9v7n30abm2
   */
  instanceId?: string;
  /**
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @example
   * 5.10.134-18.al8.x86_64
   */
  kernelVersion?: string;
  /**
   * @example
   * cluster
   */
  manageLevel?: string;
  /**
   * @example
   * managed
   */
  manageType?: string;
  /**
   * @example
   * x86_64
   */
  osArch?: string;
  /**
   * @example
   * 100
   */
  osHealthScore?: number;
  /**
   * @example
   * alios
   */
  osName?: string;
  /**
   * @example
   * 172.21.172.7
   */
  privateIp?: string;
  /**
   * @example
   * 47.98.215.58
   */
  publicIp?: string;
  /**
   * @example
   * 3b24a621-acb3-11ef-8c90-00163e1029af
   */
  resourceGroupId?: string;
  /**
   * @example
   * xxxx
   */
  resourceGroupName?: string;
  /**
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
   * @example
   * Success
   */
  code?: string;
  data?: ListAllInstancesResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * instance not exists
   */
  message?: string;
  /**
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

