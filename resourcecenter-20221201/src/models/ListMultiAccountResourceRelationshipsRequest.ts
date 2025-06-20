// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMultiAccountResourceRelationshipsRequestRelatedResourceFilter } from "./ListMultiAccountResourceRelationshipsRequestRelatedResourceFilter";


export class ListMultiAccountResourceRelationshipsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 500.
   * 
   * Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The filter conditions for resources associated with the resource.
   */
  relatedResourceFilter?: ListMultiAccountResourceRelationshipsRequestRelatedResourceFilter[];
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * m-eb3hji****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::ACK::Cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The search scope. Valid values:
   * 
   * *   ID of a resource directory: Resources within the management account and all members of the resource directory are searched. You can call the [GetResourceDirectory](https://help.aliyun.com/document_detail/159995.html) operation to query the ID.
   * *   ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched. You can call the [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html) operation to query the ID.
   * *   ID of a folder: Resources within all members in the folder are searched. You can call the [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html) operation to query the ID.
   * *   ID of a member: Resources within the member are searched. You can call the [ListAccounts](https://help.aliyun.com/document_detail/160016.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rd-r4****
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      relatedResourceFilter: 'RelatedResourceFilter',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      relatedResourceFilter: { 'type': 'array', 'itemType': ListMultiAccountResourceRelationshipsRequestRelatedResourceFilter },
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedResourceFilter)) {
      $dara.Model.validateArray(this.relatedResourceFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

