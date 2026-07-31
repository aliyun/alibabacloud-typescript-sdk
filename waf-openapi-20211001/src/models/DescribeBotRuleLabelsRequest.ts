// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBotRuleLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of your current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-53y4******
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of bot rule tag to query.
   * 
   * @example
   * human_machine_challenge
   */
  labelType?: string;
  /**
   * @remarks
   * The number of entries per page for paging. Valid values: 1 to 200. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. If a next page exists, this field has a return value.
   * 
   * > If this parameter has a return value, a next page exists. You can use the returned **NextToken** as a request parameter to obtain the data on the next page. Repeat this process until no value is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
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
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The bot management protection scenario type.
   * 
   * @example
   * app
   */
  subScene?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      labelType: 'LabelType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      subScene: 'SubScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      labelType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      subScene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

