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
   * - **sdg_deploying**: Being deployed.
   * 
   * - **failed**: Deployment failed.
   * 
   * - **success**: Deployment succeeded.
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
   * The AIC image ID.
   * 
   * @example
   * m-****
   */
  imageId?: string;
  /**
   * @remarks
   * The AIC instance ID.
   * 
   * @example
   * aic-instance****
   */
  instanceId?: string;
  /**
   * @remarks
   * The most recent operation.
   * 
   * @example
   * ServerCreate
   */
  latestAction?: string;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * AIC-Name
   */
  name?: string;
  /**
   * @remarks
   * The network attributes.
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
   * The shared data group (SDG) information deployed on the instance.
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
   * The operation state of the AIC instance. Valid values:
   * - **success**: Succeeded.
   * - **failed**: Failed.
   * - **creating**: Being created.
   * - **releasing**: Being released.
   * - **rebooting**: Being restarted.
   * - **reseting**: Being reset.
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @remarks
   * The running status of the AIC instance. Valid values:
   * - **running**: Running.
   * - **pending**: Pending.
   * - **terminating**: Being terminated.
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
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value-1
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

export class DescribeARMServerInstancesResponseBodyServers extends $dara.Model {
  /**
   * @remarks
   * The array of AIC instance information.
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
   * The ENS edge zone ID.
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
   * The most recent operation.
   * 
   * @example
   * ServerCreate
   */
  latestAction?: string;
  /**
   * @remarks
   * The server name.
   * 
   * @example
   * Server-Name
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the cluster to which the card belongs.
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
   * The server ID.
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
   * The operation state of the server. Valid values:
   * - **success**: Succeeded.
   * - **failed**: Failed.
   * - **creating**: Being created.
   * - **releasing**: Being released.
   * - **rebooting**: Being restarted.
   * - **upgrading**: Being upgraded.
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @remarks
   * The running status of the server. Valid values:
   * - **running**: Running.
   * - **stopping**: Being stopped.
   * - **down**: Shut down.
   * - **starting**: Being started.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The collection of tags.
   */
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
   * The page number of the instance list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page that was specified in the request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The array of ARM server and AIC instance information.
   */
  servers?: DescribeARMServerInstancesResponseBodyServers[];
  /**
   * @remarks
   * The total number of instances returned.
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

