// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAclsRequestTag } from "./ListAclsRequestTag";


export class ListAclsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter access control lists (ACLs) by ACL ID. You can specify at most 20 ACL IDs in each call.
   */
  aclIds?: string[];
  /**
   * @remarks
   * The ACL names. You can specify up to 10 ACL names in each call.
   */
  aclNames?: string[];
  /**
   * @remarks
   * The maximum number of entries to return. This parameter is optional. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If this is your first query or no next query is to be sent, ignore this parameter.
   * *   If a next query is to be sent, set the value to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group. You can filter the query results based on the specified ID.
   * 
   * @example
   * rg-atstuj3rtopty****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListAclsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      aclNames: 'AclNames',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      aclNames: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListAclsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.aclIds)) {
      $dara.Model.validateArray(this.aclIds);
    }
    if(Array.isArray(this.aclNames)) {
      $dara.Model.validateArray(this.aclNames);
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

