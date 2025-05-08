// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListArtifactsRequestFilter } from "./ListArtifactsRequestFilter";
import { ListArtifactsRequestTag } from "./ListArtifactsRequestTag";


export class ListArtifactsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListArtifactsRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hRQzE=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek25yfxxxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListArtifactsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListArtifactsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListArtifactsRequestTag },
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

