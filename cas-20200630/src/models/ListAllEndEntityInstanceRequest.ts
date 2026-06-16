// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllEndEntityInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to return for this call.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You can get this token from the \\`NextToken\\` response parameter of the previous query.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the parent instance.
   * 
   * @example
   * 37633
   */
  parentId?: number;
  /**
   * @remarks
   * Specifies whether to return information about the billing type in the response. Valid values: -**0**: The information is not returned. -**1**: The information is returned.
   * 
   * @example
   * 9
   */
  recursiveChildren?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
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

