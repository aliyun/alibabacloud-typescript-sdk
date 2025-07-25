// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVscsRequestTag } from "./ListVscsRequestTag";


export class ListVscsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of data entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used in the next request to retrieve a new page of results. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * The IDs of the nodes.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2xdkc6icwfha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListVscsRequestTag[];
  /**
   * @remarks
   * The VSC name.
   * 
   * @example
   * test_name
   */
  vscName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeIds: 'NodeIds',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vscName: 'VscName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListVscsRequestTag },
      vscName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
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

