// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourcesResponseBodyCloudResources extends $dara.Model {
  /**
   * @remarks
   * The number of the HTTP ports that are added to WAF.
   * 
   * >  This parameter is returned only if the cloud service is ECS or CLB.
   * 
   * @example
   * 1
   */
  httpPortCount?: number;
  /**
   * @remarks
   * The number of the HTTPS ports that are added to WAF.
   * 
   * >  This parameter is returned only if the cloud service is ECS or CLB.
   * 
   * @example
   * 1
   */
  httpsPortCount?: number;
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
   * The domain name. This parameter has a value only if the value of ResourceProduct is fc or sae.
   * 
   * @example
   * test-resource-domain
   */
  resourceDomain?: string;
  /**
   * @remarks
   * The function name. This parameter has a value only if the value of ResourceProduct is fc.
   * 
   * @example
   * test-resource-function
   */
  resourceFunction?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * alb-ffff****
   * 
   * @deprecated
   */
  resourceInstance?: string;
  /**
   * @remarks
   * The ID of the instance that is added to WAF.
   * 
   * @example
   * lb-uf60ub45fr9b***
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The IP address of the instance that is added to WAF.
   * 
   * @example
   * 1.1.1.1
   */
  resourceInstanceIp?: string;
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
   * The name of the resource.
   * 
   * @example
   * test-resource-name
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The cloud service to which the resource belongs. Valid values:
   * 
   * *   **alb**: ALB.
   * *   **mse**: MSE.
   * *   **fc**: Function Compute.
   * *   **sae**: SAE.
   * *   **ecs**: ECS.
   * *   **clb4**: Layer 4 CLB.
   * *   **clb7**: Layer 7 CLB.
   * 
   * @example
   * alb
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The route name. This parameter has a value only if the value of ResourceProduct is mse.
   * 
   * @example
   * test-route-name
   */
  resourceRouteName?: string;
  /**
   * @remarks
   * The service name. This parameter has a value only if the value of ResourceProduct is fc.
   * 
   * @example
   * test-resource-service
   */
  resourceService?: string;
  static names(): { [key: string]: string } {
    return {
      httpPortCount: 'HttpPortCount',
      httpsPortCount: 'HttpsPortCount',
      ownerUserId: 'OwnerUserId',
      resourceDomain: 'ResourceDomain',
      resourceFunction: 'ResourceFunction',
      resourceInstance: 'ResourceInstance',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceIp: 'ResourceInstanceIp',
      resourceInstanceName: 'ResourceInstanceName',
      resourceName: 'ResourceName',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
      resourceRouteName: 'ResourceRouteName',
      resourceService: 'ResourceService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpPortCount: 'number',
      httpsPortCount: 'number',
      ownerUserId: 'string',
      resourceDomain: 'string',
      resourceFunction: 'string',
      resourceInstance: 'string',
      resourceInstanceId: 'string',
      resourceInstanceIp: 'string',
      resourceInstanceName: 'string',
      resourceName: 'string',
      resourceProduct: 'string',
      resourceRegionId: 'string',
      resourceRouteName: 'string',
      resourceService: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud service resources that are added to WAF.
   */
  cloudResources?: DescribeCloudResourcesResponseBodyCloudResources[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C327F81A-CCE2-5B21-817C-F93E29C5****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of cloud service resources returned.
   * 
   * @example
   * 121
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudResources: 'CloudResources',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResources: { 'type': 'array', 'itemType': DescribeCloudResourcesResponseBodyCloudResources },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudResources)) {
      $dara.Model.validateArray(this.cloudResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

