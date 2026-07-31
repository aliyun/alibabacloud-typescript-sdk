// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The API of the protected asset to fuzzy match.
   * 
   * @example
   * abc.com
   */
  assetApi?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 500. Default value: 500.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token (Token) for the next page. Set this parameter to the value of **NextToken** returned in the previous API call. Leave this parameter empty for the first page.
   * 
   * @example
   * AAAAAJ7ob7*******MhJJ1ELRE=
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
   * The name of the protected object or protected object group to fuzzy match.
   * 
   * @example
   * abc.test.com-waf
   */
  resource?: string;
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
   * The type of the protected resource. Valid values:
   * - **single**: protected object.
   * - **asset**: protected asset.
   * - **group**: protected object group.
   * 
   * This parameter is required.
   * 
   * @example
   * single
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * This parameter is required.
   * 
   * @example
   * 1020
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      assetApi: 'AssetApi',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetApi: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

