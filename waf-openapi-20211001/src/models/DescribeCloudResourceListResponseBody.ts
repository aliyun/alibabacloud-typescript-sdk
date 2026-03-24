// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourceListResponseBodyCloudResourceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the protected resource. WAF automatically generates this ID when you add the resource to WAF.
   * 
   * @example
   * i-8vbdlsd********81e22-80-ecs
   */
  cloudResourceId?: string;
  /**
   * @remarks
   * The port of the cloud service that is added to WAF.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **http**: HTTP
   * 
   * - **https**: HTTPS
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the resource instance that is added to WAF.
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
   * rg-aek2uo2****lbka
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The cloud service to which the resource belongs. Valid values:
   * 
   * - **alb**: ALB.
   * 
   * - **mse**: MSE.
   * 
   * - **fc**: FC.
   * 
   * - **sae**: SAE.
   * 
   * - **ecs**: ECS.
   * 
   * - **clb4**: CLB that uses the TCP protocol.
   * 
   * - **clb7**: CLB that uses the HTTP or HTTPS protocol.
   * 
   * - **nlb**: NLB.
   * 
   * @example
   * ecs
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides. For more information, see the "Regions and supported products" section in this topic.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudResourceId: 'CloudResourceId',
      port: 'Port',
      protocol: 'Protocol',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceId: 'string',
      port: 'number',
      protocol: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
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

export class DescribeCloudResourceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of resources that are added to WAF.
   */
  cloudResourceList?: DescribeCloudResourceListResponseBodyCloudResourceList[];
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * > If a value is returned for this parameter, it indicates that a next page is available. To retrieve the next page of data, include the returned **NextToken** in your next request. Repeat this process until no value is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D****E840
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 118
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudResourceList: 'CloudResourceList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceList: { 'type': 'array', 'itemType': DescribeCloudResourceListResponseBodyCloudResourceList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudResourceList)) {
      $dara.Model.validateArray(this.cloudResourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

