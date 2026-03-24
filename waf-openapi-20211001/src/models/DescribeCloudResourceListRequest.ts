// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourceListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the protected resource. WAF automatically generates this ID when you add the resource to WAF.
   * 
   * > Call [CreateCloudResource](https://help.aliyun.com/document_detail/2839876.html) to add a resource. Then, view the resource ID in the response.
   * 
   * @example
   * i-8vbdlsd********81e22-80-ecs
   */
  cloudResourceId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You do not need to specify this parameter for the first request.
   * 
   * > If a value is returned for this parameter, it indicates that a next page is available. To retrieve the next page of data, include the returned **NextToken** in your next request. Repeat this process until no value is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 1111111111
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The port of the cloud service that is added to WAF.
   * 
   * @example
   * 80
   */
  port?: string;
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
   * The ID of the resource instance.
   * 
   * @example
   * i-8vbdlsd********81e22
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The cloud service to which the resource belongs. Valid values:
   * 
   * - **alb**: Application Load Balancer (ALB).
   * 
   * - **mse**: Microservices Engine (MSE).
   * 
   * - **fc**: Function Compute (FC).
   * 
   * - **sae**: Serverless App Engine (SAE).
   * 
   * - **ecs**: Elastic Compute Service (ECS).
   * 
   * - **clb4**: Classic Load Balancer (CLB) that uses the TCP protocol.
   * 
   * - **clb7**: CLB that uses the HTTP or HTTPS protocol.
   * 
   * - **apig**: API Gateway (APIG).
   * 
   * - **nlb**: Network Load Balancer (NLB).
   * 
   * > Not all cloud services are available in all regions. If you specify this parameter, make sure that the specified cloud service is available in the selected region. Otherwise, the request may fail.
   * 
   * @example
   * ecs
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      cloudResourceId: 'CloudResourceId',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerUserId: 'OwnerUserId',
      port: 'Port',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceProduct: 'ResourceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceId: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerUserId: 'string',
      port: 'string',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceProduct: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

