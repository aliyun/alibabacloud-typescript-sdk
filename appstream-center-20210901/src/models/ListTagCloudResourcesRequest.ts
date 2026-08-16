// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagCloudResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * Maximum value: 1000. Default value: 50.
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
   * The pagination token for the next query.
   * 
   * @example
   * ptnJAAAAAAAxNzE5OTEwNQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of resource IDs. A maximum of 50 resource IDs are supported. You do not need to specify this parameter when the resource type is tenant ID.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The cloud resource type.
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

