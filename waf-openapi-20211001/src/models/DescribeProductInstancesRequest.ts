// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-zxu****9d02
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 1704********9107
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceInstanceAccessStatus?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * lb-2zeugkfj81jvo****4tqm
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The IP address of the instance that is added to WAF.
   * 
   * @example
   * 1.X.X.1
   */
  resourceInstanceIp?: string;
  /**
   * @remarks
   * The name of the instance that is added to WAF.
   * 
   * @example
   * demoInstanceName
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 1.X.X.1
   * 
   * @deprecated
   */
  resourceIp?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aekz6ql****5uzi
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * exampleResourceName
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The cloud service to which the instance belongs. Valid values:
   * 
   * *   **clb4**: Layer 4 Classic Load Balancer (CLB).
   * *   **clb7**: Layer 7 CLB.
   * *   **ecs**: Elastic Compute Service (ECS).
   * 
   * @example
   * clb7
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the instance. Valid values:
   * 
   * *   **cn-chengdu**: China (Chengdu).
   * *   **cn-beijing**: China (Beijing).
   * *   **cn-zhangjiakou**: China (Zhangjiakou).
   * *   **cn-hangzhou**: China (Hangzhou).
   * *   **cn-shanghai**: China (Shanghai).
   * *   **cn-shenzhen**: China (Shenzhen).
   * *   **cn-qingdao**: China (Qingdao).
   * *   **cn-hongkong**: China (Hong Kong).
   * *   **ap-southeast-3**: Malaysia (Kuala Lumpur).
   * *   **ap-southeast-5**: Indonesia (Jakarta).
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceInstanceAccessStatus: 'ResourceInstanceAccessStatus',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceIp: 'ResourceInstanceIp',
      resourceInstanceName: 'ResourceInstanceName',
      resourceIp: 'ResourceIp',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceName: 'ResourceName',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceInstanceAccessStatus: 'string',
      resourceInstanceId: 'string',
      resourceInstanceIp: 'string',
      resourceInstanceName: 'string',
      resourceIp: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceName: 'string',
      resourceProduct: 'string',
      resourceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

