// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourcesResponseBodyCloudResources extends $dara.Model {
  /**
   * @remarks
   * The number of HTTP ports that are added to WAF.
   * 
   * > This parameter is returned only for ECS and CLB instances.
   * 
   * @example
   * 1
   */
  httpPortCount?: number;
  /**
   * @remarks
   * The number of HTTPS ports that are added to WAF.
   * 
   * > This parameter is returned only for ECS and CLB instances.
   * 
   * @example
   * 1
   */
  httpsPortCount?: number;
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
   * The domain name of the resource. This parameter is returned for FC or SAE instances.
   * 
   * @example
   * test-resource-domain
   */
  resourceDomain?: string;
  /**
   * @remarks
   * The name of the function. This parameter is returned for FC instances.
   * 
   * @example
   * test-resource-function
   */
  resourceFunction?: string;
  /**
   * @remarks
   * The ID of the resource instance.
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
   * The name of the instance.
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
   * - **alb**: ALB
   * 
   * - **mse**: MSE
   * 
   * - **fc**: FC
   * 
   * - **sae**: SAE
   * 
   * - **ecs**: ECS
   * 
   * - **clb4**: CLB that uses TCP
   * 
   * - **clb7**: CLB that uses HTTP or HTTPS
   * 
   * - **nlb**: NLB
   * 
   * @example
   * alb
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region where the resource resides.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The name of the route. This parameter is returned for MSE instances.
   * 
   * @example
   * test-route-name
   */
  resourceRouteName?: string;
  /**
   * @remarks
   * The name of the service. This parameter is returned for FC instances.
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
   * A list of cloud services.
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
   * The total number of cloud services found.
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

