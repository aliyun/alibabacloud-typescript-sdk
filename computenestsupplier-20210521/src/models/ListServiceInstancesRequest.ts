// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceInstancesRequestFilter } from "./ListServiceInstancesRequestFilter";
import { ListServiceInstancesRequestTag } from "./ListServiceInstancesRequestTag";


export class ListServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceInstancesRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to display the information that the service instance is deleted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  showDeleted?: boolean;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: ListServiceInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      showDeleted: 'ShowDeleted',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceInstancesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      showDeleted: 'boolean',
      tag: { 'type': 'array', 'itemType': ListServiceInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

