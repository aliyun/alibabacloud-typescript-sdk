// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagCloudResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Maximum value: 1000. Default value: 50.
   * 
   * @example
   * 50
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ptnJAAAAAAAxNzE5OTEwNQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs. You do not need to specify this parameter if you set ResourceType to AliUid.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the cloud resource.
   * 
   * Valid values:
   * 
   * *   AppId: app ID.
   * *   WyId: Alibaba Cloud Workspace user ID.
   * *   AppInstanceGroupId: delivery group ID.
   * *   AliUid: tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AppInstanceGroupId
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag type.
   * 
   * Valid values:
   * 
   * *   All (default): all tags.
   * *   Custom: custom tag.
   * *   System: system tag.
   * 
   * @example
   * Custom
   * 
   * **if can be null:**
   * true
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

