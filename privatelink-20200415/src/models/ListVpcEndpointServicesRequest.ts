// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointServicesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. You can specify up to 20 tag keys. The key cannot be an empty string.
   * 
   * The key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. You can specify up to 20 tag values. The value can be an empty string.
   * 
   * The value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address version. Valid values:
   * 
   * - **IPv4**: IPv4 type.
   * 
   * - **DualStack**: Dual-stack type.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Specifies whether to automatically accept endpoint connections. Valid values:
   * 
   * - **true**: Automatically accept endpoint connections.
   * 
   * - **false**: Do not automatically accept endpoint connections.
   * 
   * @example
   * false
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **1000**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token for the next query. Valid values:
   * 
   * - Leave this parameter empty for the first query or when no further results exist.
   * 
   * - If another query is needed, set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the endpoint service is deployed.
   * 
   * Call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the service resource.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * The business status of the endpoint service. Valid values:
   * 
   * - **Normal**: The endpoint service is running as expected.
   * 
   * - **FinancialLocked**: The endpoint service is locked due to an overdue payment.
   * 
   * @example
   * Normal
   */
  serviceBusinessStatus?: string;
  /**
   * @remarks
   * The ID of the endpoint service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * - **slb**: The service resource is a Classic Load Balancer (CLB) instance.
   * 
   * - **alb**: The service resource is an Application Load Balancer (ALB) instance.
   * 
   * - **nlb**: The service resource is a Network Load Balancer (NLB) instance.
   * 
   * - **gwlb**: The service resource is a Gateway Load Balancer (GWLB) instance.
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * The status of the endpoint service. Valid values:
   * 
   * - **Creating**: The endpoint service is being created.
   * 
   * - **Pending**: The endpoint service is being modified.
   * 
   * - **Active**: The endpoint service is available.
   * 
   * - **Deleting**: The endpoint service is being deleted.
   * 
   * @example
   * Active
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListVpcEndpointServicesRequestTag[];
  /**
   * @remarks
   * Specifies whether zonal affinity is enabled for domain name resolution. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceResourceType: 'ServiceResourceType',
      serviceStatus: 'ServiceStatus',
      tag: 'Tag',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      serviceBusinessStatus: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceResourceType: 'string',
      serviceStatus: 'string',
      tag: { 'type': 'array', 'itemType': ListVpcEndpointServicesRequestTag },
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

