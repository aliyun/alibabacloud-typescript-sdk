// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The ID of the region in which the related resources reside.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud resource.
   * 
   * @example
   * i-2vcj9raxrhxb48zz3whw
   */
  resourceId?: string;
  /**
   * @remarks
   * The code of the product to which the cloud resource belongs.
   * 
   * @example
   * ecs
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The type of the cloud resource.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      deployRegionId: 'DeployRegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceProduct: 'ResourceProduct',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      deployRegionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceProduct: 'string',
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

