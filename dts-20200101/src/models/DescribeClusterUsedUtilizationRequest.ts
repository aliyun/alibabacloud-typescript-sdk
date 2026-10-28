// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterUsedUtilizationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter. This parameter will be deprecated soon.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster. Specify this parameter when **MetricType** is set to **CLUSTER**. Otherwise, specify the node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * nodeid
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The ID of the migration or synchronization task.
   * 
   * @example
   * k2gm967v16f****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The environment. Default value: **ALIYUN**.
   * 
   * @example
   * ALIYUN
   */
  env?: string;
  /**
   * @remarks
   * The type of the resource to query. Valid values:
   * - **CLUSTER** (default): cluster.
   * - **NODE**: node.
   * 
   * @example
   * NODE
   */
  metricType?: string;
  ownerID?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      dedicatedClusterId: 'DedicatedClusterId',
      dtsJobId: 'DtsJobId',
      env: 'Env',
      metricType: 'MetricType',
      ownerID: 'OwnerID',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      dedicatedClusterId: 'string',
      dtsJobId: 'string',
      env: 'string',
      metricType: 'string',
      ownerID: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

