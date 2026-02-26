// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetResourceConfigurationsResponseBodyResourcesIpAddressAttributes extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.1.2
   */
  ipAddress?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - **Public**: Internet.
   * 
   * - **Private**: Private network.
   * 
   * @example
   * Public
   */
  networkType?: string;
  /**
   * @remarks
   * The version of the IP address.
   * 
   * @example
   * Ipv4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      networkType: 'NetworkType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      networkType: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetResourceConfigurationsResponseBodyResourcesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test_value
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

export class BatchGetResourceConfigurationsResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 151266687691****
   */
  accountId?: string;
  /**
   * @remarks
   * The details of the resource configuration.
   */
  configuration?: { [key: string]: any };
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2021-06-30T09:20:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time of the resource.
   * 
   * @example
   * 2021-07-30T09:20:08Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The properties of the IP addresses.
   */
  ipAddressAttributes?: BatchGetResourceConfigurationsResponseBodyResourcesIpAddressAttributes[];
  /**
   * @remarks
   * The IP addresses.
   * 
   * > Whether this parameter is returned depends on the Alibaba Cloud service to which the resource belongs.
   */
  ipAddresses?: string[];
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * eip-wz9gdtce0q6h48h*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * group1
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: BatchGetResourceConfigurationsResponseBodyResourcesTags[];
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configuration: 'Configuration',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      ipAddressAttributes: 'IpAddressAttributes',
      ipAddresses: 'IpAddresses',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      expireTime: 'string',
      ipAddressAttributes: { 'type': 'array', 'itemType': BatchGetResourceConfigurationsResponseBodyResourcesIpAddressAttributes },
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': BatchGetResourceConfigurationsResponseBodyResourcesTags },
      zoneId: 'string',
    };
  }

  validate() {
    if(this.configuration) {
      $dara.Model.validateMap(this.configuration);
    }
    if(Array.isArray(this.ipAddressAttributes)) {
      $dara.Model.validateArray(this.ipAddressAttributes);
    }
    if(Array.isArray(this.ipAddresses)) {
      $dara.Model.validateArray(this.ipAddresses);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetResourceConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F1CE0D52-32DA-531A-87A4-B9A5B68*****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
   */
  resources?: BatchGetResourceConfigurationsResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': BatchGetResourceConfigurationsResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

