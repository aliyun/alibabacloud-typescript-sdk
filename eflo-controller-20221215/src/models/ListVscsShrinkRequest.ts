// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVscsShrinkRequestTag } from "./ListVscsShrinkRequestTag";


export class ListVscsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of data records to be read in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Marks the position to start reading from. If empty, it starts from the beginning.
   * 
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * List of node IDs
   */
  nodeIdsShrink?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aek2xdkc6icwfha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * List of tags.
   */
  tag?: ListVscsShrinkRequestTag[];
  /**
   * @remarks
   * Vsc name
   * 
   * @example
   * test_name
   */
  vscName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeIdsShrink: 'NodeIds',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vscName: 'VscName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodeIdsShrink: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListVscsShrinkRequestTag },
      vscName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

