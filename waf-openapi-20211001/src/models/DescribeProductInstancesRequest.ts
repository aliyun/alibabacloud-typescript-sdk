// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The Web Application Firewall (WAF) instance ID.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the current WAF instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-zxu****9d02
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the instance belongs.
   * 
   * @example
   * 1704********9107
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The page number of the returned page. Default value: **1**.
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
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protection status of WAF. Valid values:
   * 
   * - **all**: All protected.
   * 
   * - **any**: Protected.
   * 
   * - **part**: Partially protected.
   * 
   * - **non**: Not protected.
   * 
   * @example
   * all
   */
  resourceInstanceAccessStatus?: string;
  /**
   * @remarks
   * The instance ID of the cloud service.
   * 
   * @example
   * lb-2zeugkfj81jvo****4tqm
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The IP address of the instance added to WAF.
   * 
   * @example
   * 1.X.X.1
   */
  resourceInstanceIp?: string;
  /**
   * @remarks
   * The name of the instance added to WAF.
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
   * The type of the cloud service. Valid values:
   * 
   * - **clb4**: Layer 4 CLB.
   * 
   * - **clb7**: Layer 7 CLB.
   * 
   * - **ecs**: Elastic Compute Service (ECS).
   * 
   * - **nlb**: Network Load Balancer (NLB).
   * 
   * @example
   * clb7
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the instance. Valid values:
   * 
   * - **cn-chengdu**: China (Chengdu).
   * 
   * - **cn-beijing**: China (Beijing).
   * 
   * - **cn-zhangjiakou**: China (Zhangjiakou).
   * 
   * - **cn-hangzhou**: China (Hangzhou).
   * 
   * - **cn-shanghai**: China (Shanghai).
   * 
   * - **cn-shenzhen**: China (Shenzhen).
   * 
   * - **cn-qingdao**: China (Qingdao).
   * 
   * - **cn-hongkong**: China (Hong Kong).
   * 
   * - **ap-southeast-3**: Malaysia (Kuala Lumpur).
   * 
   * - **ap-southeast-5**: Indonesia (Jakarta).
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

