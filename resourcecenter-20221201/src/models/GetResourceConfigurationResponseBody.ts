// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceConfigurationResponseBodyIpAddressAttributes } from "./GetResourceConfigurationResponseBodyIpAddressAttributes";
import { GetResourceConfigurationResponseBodyTags } from "./GetResourceConfigurationResponseBodyTags";


export class GetResourceConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 151266687691****
   */
  accountId?: string;
  /**
   * @remarks
   * The configurations of the resource.
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
   * The time when the resource expires.
   * 
   * @example
   * 2021-07-30T09:20:08Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The attributes of the IP address.
   */
  ipAddressAttributes?: GetResourceConfigurationResponseBodyIpAddressAttributes[];
  /**
   * @remarks
   * The IP addresses.
   * 
   * > Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.
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
   * The ID of the request.
   * 
   * @example
   * F1CE0D52-32DA-531A-87A4-B9A5B68D5D8E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the resource belongs.
   * 
   * @example
   * rg-acfmv4k****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * vtb-uf6978gdqbi****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * group1
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::VPC::VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: GetResourceConfigurationResponseBodyTags[];
  /**
   * @remarks
   * The zone ID of the resource.
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
      requestId: 'RequestId',
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
      ipAddressAttributes: { 'type': 'array', 'itemType': GetResourceConfigurationResponseBodyIpAddressAttributes },
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': GetResourceConfigurationResponseBodyTags },
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

