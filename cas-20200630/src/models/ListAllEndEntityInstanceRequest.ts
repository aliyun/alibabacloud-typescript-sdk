// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllEndEntityInstanceRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @example
   * 37633
   */
  parentId?: number;
  /**
   * @example
   * 9
   */
  recursiveChildren?: number;
  /**
   * @example
   * 20
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentId: 'ParentId',
      recursiveChildren: 'RecursiveChildren',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      maxResults: 'number',
      nextToken: 'string',
      parentId: 'number',
      recursiveChildren: 'number',
      showSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

