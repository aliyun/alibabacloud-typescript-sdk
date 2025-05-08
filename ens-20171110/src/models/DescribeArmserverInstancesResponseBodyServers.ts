// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeARMServerInstancesResponseBodyServersAICInstances } from "./DescribeArmserverInstancesResponseBodyServersAicinstances";
import { DescribeARMServerInstancesResponseBodyServersTags } from "./DescribeArmserverInstancesResponseBodyServersTags";


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

