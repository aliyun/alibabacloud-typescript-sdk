// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVscsShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key001
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value001
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVscsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which to start the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of node IDs.
   */
  nodeIdsShrink?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2xdkc6icwfha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListVscsShrinkRequestTag[];
  /**
   * @remarks
   * The name of the VSC.
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

