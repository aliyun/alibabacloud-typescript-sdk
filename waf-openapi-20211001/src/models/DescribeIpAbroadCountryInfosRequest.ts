// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpAbroadCountryInfosRequest extends $dara.Model {
  /**
   * @example
   * US-CA
   */
  abroadRegion?: string;
  /**
   * @example
   * US
   */
  country?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xl*******005
   */
  instanceId?: string;
  /**
   * @example
   * en
   */
  language?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

