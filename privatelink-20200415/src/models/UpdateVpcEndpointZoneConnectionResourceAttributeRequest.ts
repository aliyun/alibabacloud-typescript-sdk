// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVpcEndpointZoneConnectionResourceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The region ID of the endpoint connection whose bandwidth you want to modify.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource allocation mode. You can change the resource allocation mode only if the endpoint connection is in the **Disconnected** state. Valid values:
   * 
   * *   **Auto**: automatically and randomly allocates service resources. In this mode, the specified service resource is deleted.
   * *   **Manual**: manually allocates service resources. If you set the value to Manual, you must also specify the **ResourceId** and **ResourceType** parameters.
   * 
   * @example
   * Auto
   */
  resourceAllocateMode?: string;
  /**
   * @remarks
   * The ID of the service resource that you want to manually allocate or migrate in the zone where the endpoint connection is deployed.
   * 
   * > If **ResourceAllocateMode** is set to **Mannual**, or **ResourceReplaceMode** is set, this parameter is required.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * The migration mode of the service resource. Valid values:
   * 
   * *   **Graceful**: smooth migration. Service resources in the zone are smoothly migrated.
   * *   **Force**: forced migration. Service resources in the zone are forcefully migrated.
   * 
   * >  You need to specify this parameter only if you want to migrate service resources and the endpoint connection is in the **Connected** state. If you specify this parameter, you must also specify the **ResourceId** and **ResourceType** parameters.
   * 
   * @example
   * Graceful
   */
  resourceReplaceMode?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * *   **slb**: a CLB instance that supports PrivateLink. In addition, the CLB instance is deployed in a VPC.
   * *   **alb**: an Application Load Balancer (ALB) instance that supports PrivateLink. In addition, the ALB instance is deployed in a VPC.
   * 
   * > If **ResourceAllocateMode** is set to **Mannual**, or **ResourceReplaceMode** is set, this parameter is required.
   * 
   * @example
   * slb
   */
  resourceType?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
      resourceAllocateMode: 'ResourceAllocateMode',
      resourceId: 'ResourceId',
      resourceReplaceMode: 'ResourceReplaceMode',
      resourceType: 'ResourceType',
      serviceId: 'ServiceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      regionId: 'string',
      resourceAllocateMode: 'string',
      resourceId: 'string',
      resourceReplaceMode: 'string',
      resourceType: 'string',
      serviceId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

