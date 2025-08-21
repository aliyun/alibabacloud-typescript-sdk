// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeARMServerInstancesResponseBodyServersAICInstancesNetworkAttributes extends $dara.Model {
  /**
   * @remarks
   * The IP address of the AIC instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The network ID of the AIC instance.
   * 
   * @example
   * n-*****
   */
  networkId?: string;
  /**
   * @remarks
   * The vSwitch ID of the AIC instance.
   * 
   * @example
   * vsw-****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      networkId: 'NetworkId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      networkId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeARMServerInstancesResponseBodyServersAICInstancesSdgDeployInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * @example
   * sdg-xxxxx
   */
  SDGId?: string;
  /**
   * @remarks
   * The deployment status of the SDG. Valid values:
   * 
   * *   **sdg_deploying**
   * *   **failed**
   * *   **success**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      SDGId: 'SDGId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SDGId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeARMServerInstancesResponseBodyServersAICInstances extends $dara.Model {
  /**
   * @remarks
   * The refresh rate of the AIC instance. Unit: Hz.
   * 
   * @example
   * 120
   */
  frequency?: number;
  /**
   * @remarks
   * The ID of the AIC image.
   * 
   * @example
   * m-****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the AIC instance.
   * 
   * @example
   * aic-instance****
   */
  instanceId?: string;
  /**
   * @remarks
   * The operation that was most recently performed.
   * 
   * @example
   * ServerCreate
   */
  latestAction?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * AIC-Name
   */
  name?: string;
  /**
   * @remarks
   * The network attributes of the AIC instance.
   */
  networkAttributes?: DescribeARMServerInstancesResponseBodyServersAICInstancesNetworkAttributes;
  /**
   * @remarks
   * The resolution of the AIC instance.
   * 
   * @example
   * 1920*1080
   */
  resolution?: string;
  /**
   * @remarks
   * The information about the shared data group (SDG) that is deployed on the AIC instance.
   */
  sdgDeployInfo?: DescribeARMServerInstancesResponseBodyServersAICInstancesSdgDeployInfo;
  /**
   * @remarks
   * The specification of the AIC instance.
   * 
   * @example
   * aic.cf53r.c2.np
   */
  spec?: string;
  /**
   * @remarks
   * The operation status of the AIC instance. Valid values:
   * 
   * *   **success**
   * *   **failed**
   * *   **creating**
   * *   **releasing**
   * *   **rebooting**
   * *   **reseting**
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @remarks
   * The running status of the AIC instance. Valid values:
   * 
   * *   **running**
   * *   **pending**
   * *   **terminating**
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      frequency: 'Frequency',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      latestAction: 'LatestAction',
      name: 'Name',
      networkAttributes: 'NetworkAttributes',
      resolution: 'Resolution',
      sdgDeployInfo: 'SdgDeployInfo',
      spec: 'Spec',
      state: 'State',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frequency: 'number',
      imageId: 'string',
      instanceId: 'string',
      latestAction: 'string',
      name: 'string',
      networkAttributes: DescribeARMServerInstancesResponseBodyServersAICInstancesNetworkAttributes,
      resolution: 'string',
      sdgDeployInfo: DescribeARMServerInstancesResponseBodyServersAICInstancesSdgDeployInfo,
      spec: 'string',
      state: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.networkAttributes && typeof (this.networkAttributes as any).validate === 'function') {
      (this.networkAttributes as any).validate();
    }
    if(this.sdgDeployInfo && typeof (this.sdgDeployInfo as any).validate === 'function') {
      (this.sdgDeployInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeARMServerInstancesResponseBodyServersTags extends $dara.Model {
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

export class DescribeARMServerInstancesResponseBodyServers extends $dara.Model {
  /**
   * @remarks
   * The information about the AIC instances.
   */
  AICInstances?: DescribeARMServerInstancesResponseBodyServersAICInstances[];
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2022-05-07 11:59:09
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-hanghzou-27
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2027-05-07 11:59:09
   */
  expiredTime?: string;
  /**
   * @remarks
   * The operation that was most recently performed.
   * 
   * @example
   * ServerCreate
   */
  latestAction?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * Server-Name
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the cluster to which the server belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * prepay
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * cas-******
   */
  serverId?: string;
  /**
   * @remarks
   * The server specification.
   * 
   * @example
   * cas.cf53r
   */
  specName?: string;
  /**
   * @remarks
   * The operation status of the server. Valid values:
   * 
   * *   **success**
   * *   **failed**
   * *   **creating**
   * *   **releasing**
   * *   **rebooting**
   * *   **upgrading**
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @remarks
   * The running status of the server. Valid values:
   * 
   * *   **running**
   * *   **stopping**
   * *   **down**
   * *   **starting**
   * 
   * @example
   * running
   */
  status?: string;
  tags?: DescribeARMServerInstancesResponseBodyServersTags[];
  static names(): { [key: string]: string } {
    return {
      AICInstances: 'AICInstances',
      creationTime: 'CreationTime',
      ensRegionId: 'EnsRegionId',
      expiredTime: 'ExpiredTime',
      latestAction: 'LatestAction',
      name: 'Name',
      namespace: 'Namespace',
      payType: 'PayType',
      serverId: 'ServerId',
      specName: 'SpecName',
      state: 'State',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AICInstances: { 'type': 'array', 'itemType': DescribeARMServerInstancesResponseBodyServersAICInstances },
      creationTime: 'string',
      ensRegionId: 'string',
      expiredTime: 'string',
      latestAction: 'string',
      name: 'string',
      namespace: 'string',
      payType: 'string',
      serverId: 'string',
      specName: 'string',
      state: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeARMServerInstancesResponseBodyServersTags },
    };
  }

  validate() {
    if(Array.isArray(this.AICInstances)) {
      $dara.Model.validateArray(this.AICInstances);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeARMServerInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the servers and the AIC instances.
   */
  servers?: DescribeARMServerInstancesResponseBodyServers[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      servers: 'Servers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      servers: { 'type': 'array', 'itemType': DescribeARMServerInstancesResponseBodyServers },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.servers)) {
      $dara.Model.validateArray(this.servers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

