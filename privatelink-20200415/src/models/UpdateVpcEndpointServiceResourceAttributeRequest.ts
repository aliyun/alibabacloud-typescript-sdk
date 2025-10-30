// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVpcEndpointServiceResourceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic resource allocation. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoAllocatedEnabled?: boolean;
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
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region where the service resource is deployed.
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
   * The service resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
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
   * The zone ID of the service resource.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoAllocatedEnabled: 'AutoAllocatedEnabled',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      serviceId: 'ServiceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAllocatedEnabled: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceId: 'string',
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

