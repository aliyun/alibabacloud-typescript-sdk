// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AllocateAnycastEipAddressRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum bandwidth of the Anycast EIP. Unit: Mbit/s.
   * 
   * Valid values: **200** to **1000**.
   * 
   * Default value: **1000**.
   * 
   * > The maximum bandwidth is not a guaranteed service and is for reference only.
   * 
   * @example
   * 200
   * 
   * **if can be null:**
   * false
   */
  bandwidth?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Anycast EIP.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * docdesc
   */
  description?: string;
  /**
   * @remarks
   * The billing method of the Anycast EIP.
   * 
   * Set the value to **PostPaid**, which specifies the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Anycast EIP.
   * 
   * Set the value to **PayByTraffic**, which specifies the pay-by-data-transfer metering method.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The name of the Anycast EIP.
   * 
   * The name must be 0 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * doctest
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfm3obzjukv53a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The access area of the Anycast EIP.
   * 
   * Set the value to **international**, which specifies the areas outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * international
   */
  serviceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      serviceLocation: 'ServiceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      clientToken: 'string',
      description: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      name: 'string',
      resourceGroupId: 'string',
      serviceLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateAnycastEipAddressResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 1422000****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBDB18D8-E91E-4978-8D6C-6E2E3EE10133
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateAnycastEipAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllocateAnycastEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AllocateAnycastEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAnycastEipAddressRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The association mode. Valid values:
   * 
   * *   **Default**: the default mode. In this mode, the endpoint to be associated serves as the default origin server.
   * *   **Normal**: the standard mode. In this mode, the endpoint to be associated serves as a standard origin server.
   * 
   * > You can associate endpoints in multiple regions with an Anycast EIP. However, only one endpoint can serve as the default origin server. Others serve as standard origin servers. If you do not specify or add an access point, requests are forwarded to the default origin server.\\
   * 
   * 
   * *   If this is your first time to associate an Anycast EIP with an endpoint, set the value to **Default**.
   * *   If not, you can also set the value to **Default**, which specifies a new default origin server. In this case, the previous origin server functions as a standard origin server.
   * 
   * @example
   * Default
   */
  associationMode?: string;
  /**
   * @remarks
   * The ID of the endpoint with which you want to associate the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-d7oxbixhxv1uupnon****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the endpoint is deployed.
   * 
   * You can associate Anycast EIPs only with endpoints in specific regions. You can call the [DescribeAnycastServerRegions](https://help.aliyun.com/document_detail/171939.html) operation to query the region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * us-west-1
   */
  bindInstanceRegionId?: string;
  /**
   * @remarks
   * The type of endpoint with which you want to associate the Anycast EIP. Valid values:
   * 
   * *   **SlbInstance**: internal-facing Server Load Balancer (SLB) instance that is deployed in a virtual private cloud (VPC)
   * *   **NetworkInterface**: elastic network interface (ENI)
   * 
   * This parameter is required.
   * 
   * @example
   * SlbInstance
   */
  bindInstanceType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The information about the access points in associated access areas when you associate an Anycast EIP with an endpoint.
   * 
   * If this is your first time to associate an Anycast EIP with an endpoint, ignore this parameter. The system automatically associates all access areas.
   * 
   * You can call the [DescribeAnycastPopLocations](https://help.aliyun.com/document_detail/171938.html) operation to query information about access points in supported access areas.
   */
  popLocations?: AssociateAnycastEipAddressRequestPopLocations[];
  /**
   * @remarks
   * The secondary private IP address of the ENI with which you want to associate the Anycast EIP.
   * 
   * This parameter is valid only when you set **BindInstanceType** to **NetworkInterface**. If you do not set this parameter, the primary private IP address of the ENI is used.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      associationMode: 'AssociationMode',
      bindInstanceId: 'BindInstanceId',
      bindInstanceRegionId: 'BindInstanceRegionId',
      bindInstanceType: 'BindInstanceType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      popLocations: 'PopLocations',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      associationMode: 'string',
      bindInstanceId: 'string',
      bindInstanceRegionId: 'string',
      bindInstanceType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      popLocations: { 'type': 'array', 'itemType': AssociateAnycastEipAddressRequestPopLocations },
      privateIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAnycastEipAddressResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBDB18D8-E91E-4978-8D6C-6E2E3EE10133
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAnycastEipAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateAnycastEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateAnycastEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * > You must specify **Ip** or **AnycastId**.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The ID of the endpoint with which the Anycast EIP is associated.
   * 
   * @example
   * lb-2zebb08phyczzawe****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The IP address of the Anycast EIP.
   * 
   * > You must specify **Ip** or **AnycastId**.
   * 
   * @example
   * 139.95.XX.XX
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      bindInstanceId: 'BindInstanceId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      bindInstanceId: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the account to which the Anycast EIP belongs.
   * 
   * @example
   * 25346073170691****
   */
  aliUid?: number;
  /**
   * @remarks
   * The information about the endpoint with which the Anycast EIP is associated.
   */
  anycastEipBindInfoList?: DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoList[];
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The maximum bandwidth of the Anycast EIP. Unit: Mbit/s.
   * 
   * @example
   * 200
   */
  bandwidth?: number;
  /**
   * @remarks
   * The BID of the account to which the Anycast EIP belongs.
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The service status of the Anycast EIP. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The point in time at which the Anycast EIP was created.
   * 
   * The time follows the ISO8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-04-23T01:37:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the Anycast EIP.
   * 
   * @example
   * doctest
   */
  description?: string;
  /**
   * @remarks
   * The billing method of the Anycast EIP.
   * 
   * Only **PostPaid** may be returned, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Anycast EIP.
   * 
   * Only **PayByTraffic** may be returned, which indicates the pay-by-data-transfer metering method.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP address of the Anycast EIP.
   * 
   * @example
   * 139.95.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the Anycast EIP.
   * 
   * @example
   * docname
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmzssisocarfy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The access area of the Anycast EIP.
   * 
   * Only **international** may be returned, which indicates the areas outside the Chinese mainland.
   * 
   * @example
   * international
   */
  serviceLocation?: string;
  serviceManaged?: number;
  /**
   * @remarks
   * The status of the Anycast EIP.
   * 
   * *   **Associating**
   * *   **Unassociating**
   * *   **Allocated**
   * *   **Associated**
   * *   **Modifying**
   * *   **Releasing**
   * *   **Released**
   * 
   * @example
   * Associated
   */
  status?: string;
  /**
   * @remarks
   * The information about the tags.
   */
  tags?: DescribeAnycastEipAddressResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      anycastEipBindInfoList: 'AnycastEipBindInfoList',
      anycastId: 'AnycastId',
      bandwidth: 'Bandwidth',
      bid: 'Bid',
      businessStatus: 'BusinessStatus',
      createTime: 'CreateTime',
      description: 'Description',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      name: 'Name',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serviceLocation: 'ServiceLocation',
      serviceManaged: 'ServiceManaged',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      anycastEipBindInfoList: { 'type': 'array', 'itemType': DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoList },
      anycastId: 'string',
      bandwidth: 'number',
      bid: 'string',
      businessStatus: 'string',
      createTime: 'string',
      description: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      name: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serviceLocation: 'string',
      serviceManaged: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeAnycastEipAddressResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAnycastEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAnycastEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastPopLocationsRequest extends $tea.Model {
  /**
   * @remarks
   * The access area of the Anycast elastic IP address (EIP).
   * 
   * Set the value to **international**, which specifies the areas outside the Chinese mainland.
   * 
   * @example
   * international
   */
  serviceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      serviceLocation: 'ServiceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastPopLocationsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of access points in the specified access area.
   */
  anycastPopLocationList?: DescribeAnycastPopLocationsResponseBodyAnycastPopLocationList[];
  /**
   * @remarks
   * The number of access points.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      anycastPopLocationList: 'AnycastPopLocationList',
      count: 'Count',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastPopLocationList: { 'type': 'array', 'itemType': DescribeAnycastPopLocationsResponseBodyAnycastPopLocationList },
      count: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastPopLocationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAnycastPopLocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAnycastPopLocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastServerRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The access area from which you use the Anycast EIP to communicate with the Internet.
   * 
   * Set the value to **international**, which specifies the areas outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * international
   */
  serviceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      serviceLocation: 'ServiceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastServerRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of regions where you can associate Anycast EIPs with endpoints.
   */
  anycastServerRegionList?: DescribeAnycastServerRegionsResponseBodyAnycastServerRegionList[];
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      anycastServerRegionList: 'AnycastServerRegionList',
      count: 'Count',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastServerRegionList: { 'type': 'array', 'itemType': DescribeAnycastServerRegionsResponseBodyAnycastServerRegionList },
      count: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastServerRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAnycastServerRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAnycastServerRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesRequest extends $tea.Model {
  /**
   * @remarks
   * The IP address that is allocated to the Anycast EIP.
   * 
   * @example
   * 139.95.XX.XX
   */
  anycastEipAddress?: string;
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * >  To ensure the accuracy of the query result, we do not recommend that you specify **AnycastIds** and **AnycastId** at the same time.
   * 
   * @example
   * aeip-2zeerraiwb7ujsxdc****
   */
  anycastId?: string;
  /**
   * @remarks
   * The IDs of Anycast EIPs.
   * 
   * You can enter at most 50 Anycast EIP IDs.
   * 
   * >  To ensure the accuracy of the query result, we do not recommend that you specify **AnycastIds** and **AnycastId** at the same time.
   */
  anycastIds?: string[];
  /**
   * @remarks
   * The IDs of the cloud resources with which the Anycast EIPs are associated.
   * 
   * You can enter at most 100 cloud resource IDs.
   * 
   * @example
   * lb-2zebb08phyczzawe****
   */
  bindInstanceIds?: string[];
  /**
   * @remarks
   * The service status of the Anycast EIP. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method of the Anycast EIP.
   * 
   * Set the value to **PostPaid**, which specifies the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Anycast EIP.
   * 
   * Set the value to **PayByTraffic**, which specifies the pay-by-data-transfer metering method.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **20 to 100**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the Anycast EIP.
   * 
   * The name must be 0 to 128 characters in length, and can contain digits, hyphens (-), and underscores (_). The name must start with a letter.
   * 
   * @example
   * doctest
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The access area of the Anycast EIP.
   * 
   * Set the value to **international**, which specifies the regions outside the Chinese mainland.
   * 
   * @example
   * international
   */
  serviceLocation?: string;
  /**
   * @remarks
   * The status of the Anycast EIP. Valid values:
   * 
   * *   **Associating**
   * *   **Unassociating**
   * *   **Allocated**
   * *   **Associated**
   * *   **Modifying**
   * *   **Releasing**
   * *   **Released**
   * 
   * @example
   * Associated
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListAnycastEipAddressesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      anycastEipAddress: 'AnycastEipAddress',
      anycastId: 'AnycastId',
      anycastIds: 'AnycastIds',
      bindInstanceIds: 'BindInstanceIds',
      businessStatus: 'BusinessStatus',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      serviceLocation: 'ServiceLocation',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastEipAddress: 'string',
      anycastId: 'string',
      anycastIds: { 'type': 'array', 'itemType': 'string' },
      bindInstanceIds: { 'type': 'array', 'itemType': 'string' },
      businessStatus: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      resourceGroupId: 'string',
      serviceLocation: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListAnycastEipAddressesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of Anycast EIPs.
   */
  anycastList?: ListAnycastEipAddressesResponseBodyAnycastList[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If **NextToken** is not empty, the value of NextToken can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      anycastList: 'AnycastList',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastList: { 'type': 'array', 'itemType': ListAnycastEipAddressesResponseBodyAnycastList },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAnycastEipAddressesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAnycastEipAddressesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first query or no next queries are to be sent, ignore this parameter.
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to **ANYCASTEIPADDRESS**.
   * 
   * This parameter is required.
   * 
   * @example
   * ANYCASTEIPADDRESS
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag information.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DE65F6B7-7566-4802-9007-96F2494AC512
   */
  requestId?: string;
  /**
   * @remarks
   * The resources to which the tags are added.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAnycastEipAddressAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The description of the Anycast EIP.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * docdesc
   */
  description?: string;
  /**
   * @remarks
   * The name of the Anycast EIP.
   * 
   * The name must be 0 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * docname
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAnycastEipAddressAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBDB18D8-E91E-4978-8D6C-6E2E3EE10133
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAnycastEipAddressAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAnycastEipAddressAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAnycastEipAddressAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAnycastEipAddressSpecRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The maximum bandwidth of the Anycast EIP. Unit: Mbit/s.
   * 
   * Valid values: **200** to **1000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  bandwidth?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      bandwidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAnycastEipAddressSpecResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBDB18D8-E91E-4978-8D6C-6E2E3EE10133
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAnycastEipAddressSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAnycastEipAddressSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAnycastEipAddressSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseAnycastEipAddressRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP to be released.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseAnycastEipAddressResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBDB18D8-E91E-4978-8D6C-6E2E3EE10133
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseAnycastEipAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseAnycastEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseAnycastEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The resource ID. You can specify at most 20 IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to **ANYCASTEIPADDRESS**.
   * 
   * This parameter is required.
   * 
   * @example
   * ANYCASTEIPADDRESS
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B639225A0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * **true**
   * 
   * **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateAnycastEipAddressRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-2zeerraiwb7ujsxdc****
   */
  anycastId?: string;
  /**
   * @remarks
   * The ID of the endpoint from which you want to disassociate the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-2zebb08phyczzawe****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The region where the endpoint is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * us-west-1
   */
  bindInstanceRegionId?: string;
  /**
   * @remarks
   * The type of endpoint from which you want to disassociate the Anycast EIP. Valid values:
   * 
   * *   **SlbInstance**: an internal-facing Server Load Balancer (SLB) instance that is deployed in a virtual private cloud (VPC)
   * *   **NetworkInterface**: elastic network interface (ENI)
   * 
   * This parameter is required.
   * 
   * @example
   * SlbInstance
   */
  bindInstanceType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The secondary private IP address of the ENI from which you want to disassociate the Anycast EIP.
   * 
   * This parameter is valid only when you set **BindInstanceType** to **NetworkInterface**. If you do not specify this parameter, the primary private IP address of the ENI is used.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      bindInstanceId: 'BindInstanceId',
      bindInstanceRegionId: 'BindInstanceRegionId',
      bindInstanceType: 'BindInstanceType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      bindInstanceId: 'string',
      bindInstanceRegionId: 'string',
      bindInstanceType: 'string',
      clientToken: 'string',
      dryRun: 'string',
      privateIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateAnycastEipAddressResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBDB18D8-E91E-4978-8D6C-6E2E3EE10133
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateAnycastEipAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnassociateAnycastEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnassociateAnycastEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The resource ID. You can specify up to 20 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to **ANYCASTEIPADDRESS**.
   * 
   * This parameter is required.
   * 
   * @example
   * ANYCASTEIPADDRESS
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag that you want to remove. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain `http://` or `https://`.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B639225A0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * **true**
   * 
   * **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnycastEipAddressAssociationsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The association mode. Valid values:
   * 
   * *   **Default**: the default mode. In this mode, cloud resources to be associated are set as default origin servers.
   * *   **Normal**: the standard mode. In this mode, cloud resources to be associated are set as standard origin servers.
   * 
   * @example
   * Default
   */
  associationMode?: string;
  /**
   * @remarks
   * The ID of the cloud resource with which you want to associate the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-d7oxbixhxv1uupnon****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * >  If you do not set this parameter, the system automatically uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * *   **true**: prechecks the request without updating the association information. The system checks the required parameters, request syntax, and limits. If the request fails to pass the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the API request. If the request passes the precheck, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The access areas and access points to be added.
   */
  popLocationAddList?: UpdateAnycastEipAddressAssociationsRequestPopLocationAddList[];
  /**
   * @remarks
   * The access areas and access points to be deleted.
   */
  popLocationDeleteList?: UpdateAnycastEipAddressAssociationsRequestPopLocationDeleteList[];
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      associationMode: 'AssociationMode',
      bindInstanceId: 'BindInstanceId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      popLocationAddList: 'PopLocationAddList',
      popLocationDeleteList: 'PopLocationDeleteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      associationMode: 'string',
      bindInstanceId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      popLocationAddList: { 'type': 'array', 'itemType': UpdateAnycastEipAddressAssociationsRequestPopLocationAddList },
      popLocationDeleteList: { 'type': 'array', 'itemType': UpdateAnycastEipAddressAssociationsRequestPopLocationDeleteList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnycastEipAddressAssociationsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnycastEipAddressAssociationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAnycastEipAddressAssociationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAnycastEipAddressAssociationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAnycastEipAddressRequestPopLocations extends $tea.Model {
  /**
   * @remarks
   * The information about the access points in associated access areas when you associate an Anycast EIP with an endpoint.
   * 
   * If this is your first time to associate an Anycast EIP with an endpoint, ignore this parameter. The system automatically associates all access areas.
   * 
   * You can call the [DescribeAnycastPopLocations](https://help.aliyun.com/document_detail/171938.html) operation to query information about access points in supported access areas.
   * 
   * @example
   * us-west-1-pop
   */
  popLocation?: string;
  static names(): { [key: string]: string } {
    return {
      popLocation: 'PopLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoListPopLocations extends $tea.Model {
  /**
   * @remarks
   * The information about the access points in associated access areas when you associate an Anycast EIP with a cloud resource.
   * 
   * If this is your first time associating an Anycast EIP with an endpoint, the system returns information about access points in all access areas.
   * 
   * @example
   * us-west-1-pop
   */
  popLocation?: string;
  static names(): { [key: string]: string } {
    return {
      popLocation: 'PopLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoList extends $tea.Model {
  /**
   * @remarks
   * The association mode. Valid values:
   * 
   * *   **Default**: the default mode. In this mode, the associated endpoint serves as the default origin server.
   * *   **Normal**: the standard mode. In this mode, the associated endpoint serves as a standard origin server.
   * 
   * @example
   * Default
   */
  associationMode?: string;
  /**
   * @remarks
   * The ID of the endpoint with which the Anycast EIP is associated.
   * 
   * @example
   * lb-2zebb08phyczzawe****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the endpoint is deployed.
   * 
   * @example
   * us-west-1
   */
  bindInstanceRegionId?: string;
  /**
   * @remarks
   * The type of endpoint with which the Anycast EIP is associated. Valid values:
   * 
   * *   **SlbInstance**: a CLB instance in a VPC.
   * *   **NetworkInterface**: an elastic network interface (ENI).
   * 
   * @example
   * SlbInstance
   */
  bindInstanceType?: string;
  /**
   * @remarks
   * The time when the Anycast EIP was associated.
   * 
   * The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-04-23T02:37:38Z
   */
  bindTime?: string;
  /**
   * @remarks
   * The information about the access points in associated access areas when you associate an Anycast EIP with a cloud resource.
   * 
   * If this is your first time associating an Anycast EIP with an endpoint, the system returns information about access points in all access areas.
   */
  popLocations?: DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoListPopLocations[];
  /**
   * @remarks
   * The secondary private IP address of the associated ENI.
   * 
   * This parameter is valid only when **BindInstanceType** is set to **NetworkInterface**.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * *   **BINDING**
   * *   **BINDED**
   * *   **UNBINDING**
   * *   **DELETED**
   * *   **MODIFYING**
   * 
   * @example
   * BINDING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      associationMode: 'AssociationMode',
      bindInstanceId: 'BindInstanceId',
      bindInstanceRegionId: 'BindInstanceRegionId',
      bindInstanceType: 'BindInstanceType',
      bindTime: 'BindTime',
      popLocations: 'PopLocations',
      privateIpAddress: 'PrivateIpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationMode: 'string',
      bindInstanceId: 'string',
      bindInstanceRegionId: 'string',
      bindInstanceType: 'string',
      bindTime: 'string',
      popLocations: { 'type': 'array', 'itemType': DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoListPopLocations },
      privateIpAddress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressResponseBodyTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * 1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastPopLocationsResponseBodyAnycastPopLocationList extends $tea.Model {
  /**
   * @remarks
   * The ID of the region where the access point is deployed.
   * 
   * @example
   * us-west-1-pop
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region where the access point is deployed.
   * 
   * @example
   * us-west-1-pop
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastServerRegionsResponseBodyAnycastServerRegionList extends $tea.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * eu-west-1-gb33-a01
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesRequestTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. You cannot specify empty strings as tag keys.
   * 
   * The key can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The key must start with a letter but cannot start with `aliyun` or `acs:`. The key cannot contain `http://` or `https://`.
   * 
   * >  You must specify at least one of **Tag.N** (**Tag.N.Key** and **Tag.N.Value**).
   * 
   * @example
   * 1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. It can be an empty string.
   * 
   * The value cannot exceed 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter but cannot start with `aliyun` or `acs:`. The value cannot contain `http://` or `https://`.
   * 
   * >  You must specify at least one of **Tag.N** (**Tag.N.Key** and **Tag.N.Value**).
   * 
   * @example
   * tag1
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesResponseBodyAnycastListAnycastEipBindInfoList extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud resource with which the Anycast EIP is associated.
   * 
   * @example
   * lb-2zebb08phyczzawe****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the cloud resource is deployed.
   * 
   * @example
   * us-west-1
   */
  bindInstanceRegionId?: string;
  /**
   * @remarks
   * The type of cloud resource with which the Anycast EIP is associated.
   * 
   * *   **SlbInstance**: an internal-facing Classic Load Balancer (CLB) instance deployed in a virtual private cloud (VPC). CLB is formerly known as Server Load Balancer (SLB).
   * *   **NetworkInterface**: an elastic network interface (ENI).
   * 
   * @example
   * SlbInstance
   */
  bindInstanceType?: string;
  /**
   * @remarks
   * The time when the Anycast EIP was associated.
   * 
   * @example
   * 2022-04-23T01:37:38Z
   */
  bindTime?: string;
  static names(): { [key: string]: string } {
    return {
      bindInstanceId: 'BindInstanceId',
      bindInstanceRegionId: 'BindInstanceRegionId',
      bindInstanceType: 'BindInstanceType',
      bindTime: 'BindTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindInstanceId: 'string',
      bindInstanceRegionId: 'string',
      bindInstanceType: 'string',
      bindTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesResponseBodyAnycastListTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesResponseBodyAnycastList extends $tea.Model {
  /**
   * @remarks
   * The ID of the account to which the Anycast EIP belongs.
   * 
   * @example
   * 123440159596****
   */
  aliUid?: number;
  /**
   * @remarks
   * The list of cloud resources with which the Anycast EIPs are associated.
   */
  anycastEipBindInfoList?: ListAnycastEipAddressesResponseBodyAnycastListAnycastEipBindInfoList[];
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * @example
   * aeip-2zeerraiwb7ujsxdc****
   */
  anycastId?: string;
  /**
   * @remarks
   * The maximum bandwidth of the Anycast EIP. Unit: Mbit/s.
   * 
   * @example
   * 200
   */
  bandwidth?: number;
  /**
   * @remarks
   * The service status of the Anycast EIP. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The time when the Anycast EIP was created.
   * 
   * @example
   * 2022-04-22T01:37:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the Anycast EIP.
   * 
   * @example
   * docdesc
   */
  description?: string;
  /**
   * @remarks
   * The billing method of the Anycast EIP.
   * 
   * **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Anycast EIP.
   * 
   * **PayByTraffic**: pay-by-data-transfer
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP address of the Anycast EIP.
   * 
   * @example
   * 139.95.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the Anycast EIP.
   * 
   * @example
   * docname
   */
  name?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The access area of the Anycast EIP.
   * 
   * **international**: regions outside the Chinese mainland
   * 
   * @example
   * international
   */
  serviceLocation?: string;
  /**
   * @remarks
   * Indicates whether the resource is created by the service account.
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  serviceManaged?: number;
  /**
   * @remarks
   * The status of the Anycast EIP.
   * 
   * *   **Associating**
   * *   **Unassociating**
   * *   **Allocated**
   * *   **Associated**
   * *   **Modifying**
   * *   **Releasing**
   * *   **Released**
   * 
   * @example
   * Associating
   */
  status?: string;
  /**
   * @remarks
   * The information about the tags.
   */
  tags?: ListAnycastEipAddressesResponseBodyAnycastListTags[];
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      anycastEipBindInfoList: 'AnycastEipBindInfoList',
      anycastId: 'AnycastId',
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      createTime: 'CreateTime',
      description: 'Description',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      serviceLocation: 'ServiceLocation',
      serviceManaged: 'ServiceManaged',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      anycastEipBindInfoList: { 'type': 'array', 'itemType': ListAnycastEipAddressesResponseBodyAnycastListAnycastEipBindInfoList },
      anycastId: 'string',
      bandwidth: 'number',
      businessStatus: 'string',
      createTime: 'string',
      description: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      name: 'string',
      resourceGroupId: 'string',
      serviceLocation: 'string',
      serviceManaged: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListAnycastEipAddressesResponseBodyAnycastListTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be a up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * > You must specify **ResourceId.N** or **Tag.N** (**Tag.N.Key** or **Tag.N.Value**).
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * It can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * > You must specify **ResourceId.N** or **Tag.N** (**Tag.N.Key** or **Tag.N.Value**).
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * aeip-2zeerraiwb7ujsxdc****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Only **ANYCASTEIPADDRESS** may be returned.
   * 
   * @example
   * ANYCASTEIPADDRESS
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * FinanceJoshua
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. You must enter at least one tag key and at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot start with acs: or aliyun. It cannot contain `http://` or `https://`.
   * 
   * > When you call this operation, **Tag.N.Key** is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. You must enter at least one tag value and at most 20 tag values. The tag value can be an empty string.
   * 
   * It can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * > When you call this operation, **Tag.N.Value** is required.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnycastEipAddressAssociationsRequestPopLocationAddList extends $tea.Model {
  /**
   * @remarks
   * The access points in the access areas to be added.
   * 
   * You can call the [DescribeAnycastPopLocations](https://help.aliyun.com/document_detail/171938.html) operation to query the access points in supported access areas.
   * 
   * @example
   * us-west-1-pop
   */
  popLocation?: string;
  static names(): { [key: string]: string } {
    return {
      popLocation: 'PopLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnycastEipAddressAssociationsRequestPopLocationDeleteList extends $tea.Model {
  /**
   * @remarks
   * The access points in the access areas to be deleted.
   * 
   * >  If the access point in the access area is associated with a default origin server, you cannot delete the access point in the access area.
   * 
   * @example
   * eu-west-1-pop
   */
  popLocation?: string;
  static names(): { [key: string]: string } {
    return {
      popLocation: 'PopLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eipanycast", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Creates an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - AllocateAnycastEipAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateAnycastEipAddressResponse
   */
  async allocateAnycastEipAddressWithOptions(request: AllocateAnycastEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocateAnycastEipAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceLocation)) {
      query["ServiceLocation"] = request.serviceLocation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocateAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocateAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new AllocateAnycastEipAddressResponse({}));
  }

  /**
   * Creates an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - AllocateAnycastEipAddressRequest
   * @returns AllocateAnycastEipAddressResponse
   */
  async allocateAnycastEipAddress(request: AllocateAnycastEipAddressRequest): Promise<AllocateAnycastEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateAnycastEipAddressWithOptions(request, runtime);
  }

  /**
   * Associates an Anycast elastic IP address (Anycast EIP) with an endpoint.
   * 
   * @param request - AssociateAnycastEipAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateAnycastEipAddressResponse
   */
  async associateAnycastEipAddressWithOptions(request: AssociateAnycastEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AssociateAnycastEipAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.associationMode)) {
      query["AssociationMode"] = request.associationMode;
    }

    if (!Util.isUnset(request.bindInstanceId)) {
      query["BindInstanceId"] = request.bindInstanceId;
    }

    if (!Util.isUnset(request.bindInstanceRegionId)) {
      query["BindInstanceRegionId"] = request.bindInstanceRegionId;
    }

    if (!Util.isUnset(request.bindInstanceType)) {
      query["BindInstanceType"] = request.bindInstanceType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.popLocations)) {
      query["PopLocations"] = request.popLocations;
    }

    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new AssociateAnycastEipAddressResponse({}));
  }

  /**
   * Associates an Anycast elastic IP address (Anycast EIP) with an endpoint.
   * 
   * @param request - AssociateAnycastEipAddressRequest
   * @returns AssociateAnycastEipAddressResponse
   */
  async associateAnycastEipAddress(request: AssociateAnycastEipAddressRequest): Promise<AssociateAnycastEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAnycastEipAddressWithOptions(request, runtime);
  }

  /**
   * Queries Anycast elastic IP addresses (Anycast EIPs) associated with specified instance IP addresses or instance IDs, including instance status, maximum bandwidth, and associated resources.
   * 
   * @param request - DescribeAnycastEipAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAnycastEipAddressResponse
   */
  async describeAnycastEipAddressWithOptions(request: DescribeAnycastEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAnycastEipAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.bindInstanceId)) {
      query["BindInstanceId"] = request.bindInstanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new DescribeAnycastEipAddressResponse({}));
  }

  /**
   * Queries Anycast elastic IP addresses (Anycast EIPs) associated with specified instance IP addresses or instance IDs, including instance status, maximum bandwidth, and associated resources.
   * 
   * @param request - DescribeAnycastEipAddressRequest
   * @returns DescribeAnycastEipAddressResponse
   */
  async describeAnycastEipAddress(request: DescribeAnycastEipAddressRequest): Promise<DescribeAnycastEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAnycastEipAddressWithOptions(request, runtime);
  }

  /**
   * Queries the information about the access points in an area.
   * 
   * @param request - DescribeAnycastPopLocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAnycastPopLocationsResponse
   */
  async describeAnycastPopLocationsWithOptions(request: DescribeAnycastPopLocationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAnycastPopLocationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceLocation)) {
      query["ServiceLocation"] = request.serviceLocation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAnycastPopLocations",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAnycastPopLocationsResponse>(await this.callApi(params, req, runtime), new DescribeAnycastPopLocationsResponse({}));
  }

  /**
   * Queries the information about the access points in an area.
   * 
   * @param request - DescribeAnycastPopLocationsRequest
   * @returns DescribeAnycastPopLocationsResponse
   */
  async describeAnycastPopLocations(request: DescribeAnycastPopLocationsRequest): Promise<DescribeAnycastPopLocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAnycastPopLocationsWithOptions(request, runtime);
  }

  /**
   * Queries the regions where you can associate Anycast elastic IP addresses (Anycast EIPs) with endpoints.
   * 
   * @param request - DescribeAnycastServerRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAnycastServerRegionsResponse
   */
  async describeAnycastServerRegionsWithOptions(request: DescribeAnycastServerRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAnycastServerRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceLocation)) {
      query["ServiceLocation"] = request.serviceLocation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAnycastServerRegions",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAnycastServerRegionsResponse>(await this.callApi(params, req, runtime), new DescribeAnycastServerRegionsResponse({}));
  }

  /**
   * Queries the regions where you can associate Anycast elastic IP addresses (Anycast EIPs) with endpoints.
   * 
   * @param request - DescribeAnycastServerRegionsRequest
   * @returns DescribeAnycastServerRegionsResponse
   */
  async describeAnycastServerRegions(request: DescribeAnycastServerRegionsRequest): Promise<DescribeAnycastServerRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAnycastServerRegionsWithOptions(request, runtime);
  }

  /**
   * 查询指定接入区域已创建的Anycast EIP实例
   * 
   * @param request - ListAnycastEipAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnycastEipAddressesResponse
   */
  async listAnycastEipAddressesWithOptions(request: ListAnycastEipAddressesRequest, runtime: $Util.RuntimeOptions): Promise<ListAnycastEipAddressesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastEipAddress)) {
      query["AnycastEipAddress"] = request.anycastEipAddress;
    }

    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.anycastIds)) {
      query["AnycastIds"] = request.anycastIds;
    }

    if (!Util.isUnset(request.bindInstanceIds)) {
      query["BindInstanceIds"] = request.bindInstanceIds;
    }

    if (!Util.isUnset(request.businessStatus)) {
      query["BusinessStatus"] = request.businessStatus;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceLocation)) {
      query["ServiceLocation"] = request.serviceLocation;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAnycastEipAddresses",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAnycastEipAddressesResponse>(await this.callApi(params, req, runtime), new ListAnycastEipAddressesResponse({}));
  }

  /**
   * 查询指定接入区域已创建的Anycast EIP实例
   * 
   * @param request - ListAnycastEipAddressesRequest
   * @returns ListAnycastEipAddressesResponse
   */
  async listAnycastEipAddresses(request: ListAnycastEipAddressesRequest): Promise<ListAnycastEipAddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAnycastEipAddressesWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resources.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are added to resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - ModifyAnycastEipAddressAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAnycastEipAddressAttributeResponse
   */
  async modifyAnycastEipAddressAttributeWithOptions(request: ModifyAnycastEipAddressAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAnycastEipAddressAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAnycastEipAddressAttribute",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAnycastEipAddressAttributeResponse>(await this.callApi(params, req, runtime), new ModifyAnycastEipAddressAttributeResponse({}));
  }

  /**
   * Modifies the name and description of an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - ModifyAnycastEipAddressAttributeRequest
   * @returns ModifyAnycastEipAddressAttributeResponse
   */
  async modifyAnycastEipAddressAttribute(request: ModifyAnycastEipAddressAttributeRequest): Promise<ModifyAnycastEipAddressAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAnycastEipAddressAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the maximum bandwidth of an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - ModifyAnycastEipAddressSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAnycastEipAddressSpecResponse
   */
  async modifyAnycastEipAddressSpecWithOptions(request: ModifyAnycastEipAddressSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAnycastEipAddressSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAnycastEipAddressSpec",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAnycastEipAddressSpecResponse>(await this.callApi(params, req, runtime), new ModifyAnycastEipAddressSpecResponse({}));
  }

  /**
   * Modifies the maximum bandwidth of an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - ModifyAnycastEipAddressSpecRequest
   * @returns ModifyAnycastEipAddressSpecResponse
   */
  async modifyAnycastEipAddressSpec(request: ModifyAnycastEipAddressSpecRequest): Promise<ModifyAnycastEipAddressSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAnycastEipAddressSpecWithOptions(request, runtime);
  }

  /**
   * Releases an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - ReleaseAnycastEipAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseAnycastEipAddressResponse
   */
  async releaseAnycastEipAddressWithOptions(request: ReleaseAnycastEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseAnycastEipAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new ReleaseAnycastEipAddressResponse({}));
  }

  /**
   * Releases an Anycast elastic IP address (Anycast EIP).
   * 
   * @param request - ReleaseAnycastEipAddressRequest
   * @returns ReleaseAnycastEipAddressResponse
   */
  async releaseAnycastEipAddress(request: ReleaseAnycastEipAddressRequest): Promise<ReleaseAnycastEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseAnycastEipAddressWithOptions(request, runtime);
  }

  /**
   * Creates and adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Creates and adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Disassociates an Anycast elastic IP address (Anycast EIP) from an endpoint.
   * 
   * @param request - UnassociateAnycastEipAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnassociateAnycastEipAddressResponse
   */
  async unassociateAnycastEipAddressWithOptions(request: UnassociateAnycastEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateAnycastEipAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.bindInstanceId)) {
      query["BindInstanceId"] = request.bindInstanceId;
    }

    if (!Util.isUnset(request.bindInstanceRegionId)) {
      query["BindInstanceRegionId"] = request.bindInstanceRegionId;
    }

    if (!Util.isUnset(request.bindInstanceType)) {
      query["BindInstanceType"] = request.bindInstanceType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnassociateAnycastEipAddress",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnassociateAnycastEipAddressResponse>(await this.callApi(params, req, runtime), new UnassociateAnycastEipAddressResponse({}));
  }

  /**
   * Disassociates an Anycast elastic IP address (Anycast EIP) from an endpoint.
   * 
   * @param request - UnassociateAnycastEipAddressRequest
   * @returns UnassociateAnycastEipAddressResponse
   */
  async unassociateAnycastEipAddress(request: UnassociateAnycastEipAddressRequest): Promise<UnassociateAnycastEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateAnycastEipAddressWithOptions(request, runtime);
  }

  /**
   * Removes tags from Anycast EIPs.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes tags from Anycast EIPs.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * If an Anycast EIP is associated with endpoints in different regions, you can change the access points that are mapped to an endpoint. You can call UpdateAnycastEipAddressAssociations to add or delete endpoints to modify the mappings between endpoints and access points.
   * 
   * @param request - UpdateAnycastEipAddressAssociationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAnycastEipAddressAssociationsResponse
   */
  async updateAnycastEipAddressAssociationsWithOptions(request: UpdateAnycastEipAddressAssociationsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAnycastEipAddressAssociationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.anycastId)) {
      query["AnycastId"] = request.anycastId;
    }

    if (!Util.isUnset(request.associationMode)) {
      query["AssociationMode"] = request.associationMode;
    }

    if (!Util.isUnset(request.bindInstanceId)) {
      query["BindInstanceId"] = request.bindInstanceId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.popLocationAddList)) {
      query["PopLocationAddList"] = request.popLocationAddList;
    }

    if (!Util.isUnset(request.popLocationDeleteList)) {
      query["PopLocationDeleteList"] = request.popLocationDeleteList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAnycastEipAddressAssociations",
      version: "2020-03-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAnycastEipAddressAssociationsResponse>(await this.callApi(params, req, runtime), new UpdateAnycastEipAddressAssociationsResponse({}));
  }

  /**
   * If an Anycast EIP is associated with endpoints in different regions, you can change the access points that are mapped to an endpoint. You can call UpdateAnycastEipAddressAssociations to add or delete endpoints to modify the mappings between endpoints and access points.
   * 
   * @param request - UpdateAnycastEipAddressAssociationsRequest
   * @returns UpdateAnycastEipAddressAssociationsResponse
   */
  async updateAnycastEipAddressAssociations(request: UpdateAnycastEipAddressAssociationsRequest): Promise<UpdateAnycastEipAddressAssociationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAnycastEipAddressAssociationsWithOptions(request, runtime);
  }

}
