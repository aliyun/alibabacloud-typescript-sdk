// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-lbj****cn0c
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 11769793******
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
  /**
   * @remarks
   * The domain name. You can use this parameter if you set ResourceProduct to fc or sae.
   * 
   * @example
   * fc-domain-test
   */
  resourceDomain?: string;
  /**
   * @remarks
   * The function name. You can use this parameter if you set ResourceProduct to fc.
   * 
   * @example
   * fc-test
   */
  resourceFunction?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * alb-43glijk0fr****gths
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The name of the instance that is added to WAF.
   * 
   * @example
   * test-name
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm4gh****wela
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * alb-name
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The cloud service to which the resource belongs. If you do not specify this parameter, the system automatically returns the Application Load Balancer (ALB), Microservices Engine (MSE), Function Compute, and Serverless App Engine (SAE) resources that are added to WAF. Valid values:
   * 
   * *   **alb**: ALB.
   * *   **mse**: MSE.
   * *   **fc**: Function Compute.
   * *   **sae**: SAE.
   * *   **ecs**: Elastic Compute Service (ECS).
   * *   **clb4**: Layer 4 Classic Load Balancer (CLB).
   * *   **clb7**: Layer 7 CLB.
   * *   **nlb**: Network Load Balancer (NLB).
   * 
   * >  Different cloud services are available in different regions. The specified cloud service must be available in the specified region.
   * 
   * @example
   * alb
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the resource. For information about region IDs, see the following table.
   * 
   * >  Different cloud services are available in different regions. The specified cloud service must be available in the specified region.
   * 
   * @example
   * cn-beijing
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The route name. You can use this parameter if you set ResourceProduct to mse.
   * 
   * @example
   * mse-default-traffic
   */
  resourceRouteName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceDomain: 'ResourceDomain',
      resourceFunction: 'ResourceFunction',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceName: 'ResourceInstanceName',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceName: 'ResourceName',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
      resourceRouteName: 'ResourceRouteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceDomain: 'string',
      resourceFunction: 'string',
      resourceInstanceId: 'string',
      resourceInstanceName: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceName: 'string',
      resourceProduct: 'string',
      resourceRegionId: 'string',
      resourceRouteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

