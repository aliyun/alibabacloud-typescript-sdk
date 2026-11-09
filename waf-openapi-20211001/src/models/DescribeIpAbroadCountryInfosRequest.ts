// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpAbroadCountryInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The overseas region to query. You can perform a fuzzy match by using the region ID or the region name in Chinese or English.
   * 
   * @example
   * US-CA
   */
  abroadRegion?: string;
  /**
   * @remarks
   * The overseas country to query. You can perform a fuzzy match by using the country ID or the country name in Chinese or English.
   * 
   * @example
   * US
   */
  country?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xl*******005
   */
  instanceId?: string;
  /**
   * @remarks
   * The language used for the country and region names in the response. Valid values:
   * 
   * - **en** (**default**): English.
   * 
   * - **cn**: Simplified Chinese.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The number of entries to return on each page for a paging query. Valid values: 1 to 500. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The paging token that is used to query the next page. Set the value to the **NextToken** value returned from the previous API call. You do not need to specify this parameter for the first call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aekzwwk****cv5i
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      abroadRegion: 'AbroadRegion',
      country: 'Country',
      instanceId: 'InstanceId',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abroadRegion: 'string',
      country: 'string',
      instanceId: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

