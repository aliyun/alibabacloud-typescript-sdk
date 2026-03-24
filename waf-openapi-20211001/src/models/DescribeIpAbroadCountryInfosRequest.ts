// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpAbroadCountryInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The region outside China to query. Supports fuzzy query by region ID or region name in Chinese or English.
   * 
   * @example
   * US-CA
   */
  abroadRegion?: string;
  /**
   * @remarks
   * The country outside China to query. Supports fuzzy query by country ID or country name in Chinese or English.
   * 
   * @example
   * US
   */
  country?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the current WAF instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xl*******005
   */
  instanceId?: string;
  /**
   * @remarks
   * The language used for country and region names in the response. Valid values:
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
   * The number of entries per page in a paged query. Valid values: 1 to 500. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. Set this parameter to the value of the **NextToken** parameter returned from the previous API call. You do not need to specify this parameter for the first page query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: The Chinese mainland.
   * 
   * - **ap-southeast-1**: Outside the Chinese mainland.
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

