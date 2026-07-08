// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-lbj****cn0c
   */
  instanceId?: string;
  /**
   * @remarks
   * The UID of the account to which the resource belongs.
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
   * The region where the WAF instance resides. Valid values:
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
   * The domain name of the resource. This parameter is available when you query FC or SAE resources.
   * 
   * @example
   * fc-domain-test
   */
  resourceDomain?: string;
  /**
   * @remarks
   * The name of the function. This parameter is available when you query FC resources.
   * 
   * @example
   * fc-test
   */
  resourceFunction?: string;
  /**
   * @remarks
   * The ID of the resource instance.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm4gh****wela
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The name of the resource instance.
   * 
   * @example
   * alb-name
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The cloud service to which the resource belongs. By default, instances of Application Load Balancer (ALB), Microservices Engine (MSE), Function Compute (FC), and Serverless App Engine (SAE) are returned. Valid values:
   * 
   * - **alb**: ALB
   * 
   * - **mse**: MSE
   * 
   * - **fc**: FC
   * 
   * - **sae**: SAE
   * 
   * - **ecs**: Elastic Compute Service (ECS)
   * 
   * - **clb4**: Classic Load Balancer (CLB) that uses TCP
   * 
   * - **clb7**: CLB that uses HTTP or HTTPS
   * 
   * - **nlb**: Network Load Balancer (NLB)
   * 
   * > Each cloud service supports different regions. If you specify this parameter, make sure the region you specify for the ResourceRegionId parameter supports this service. Otherwise, the query may fail.
   * 
   * @example
   * alb
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides. For more information, see the "Regions and supported products" section in this topic.
   * 
   * > Each cloud service supports different regions. If you specify the ResourceProduct parameter, make sure the region you specify for this parameter supports that service. Otherwise, the query may fail.
   * 
   * @example
   * cn-beijing
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The name of the route. This parameter is available when you query MSE resources.
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

