// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page displayed in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries in the result set. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. An empty value of NextToken indicates that there is no next page.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou&&`curl DM9LRCSJ.popscan.xaliyun.com`%3B
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-cd1f2g3h4i\\"\\"
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource type. The value is fixed as **instance**.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc,0
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

