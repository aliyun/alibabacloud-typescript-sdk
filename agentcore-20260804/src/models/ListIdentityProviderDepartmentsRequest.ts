// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProviderDepartmentsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of departments returned per page. Valid values: 1 to 50. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned from the previous page. Do not specify this parameter for the first query. When continuing pagination, keep the identity provider and parentDepartmentId unchanged, and pass the token as is. An empty return value or no return value indicates that there are no subsequent pages at the current level.
   * 
   * @example
   * example-next-page-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the parent department. If you specify this parameter, the direct child departments of this department are queried. If this parameter is not specified or is empty, the root level is queried, and all descendants are not recursively returned. When expanding a node in the list, pass the ID of the node, not its parentId.
   * 
   * @example
   * 10001
   */
  parentDepartmentId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      parentDepartmentId: 'parentDepartmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parentDepartmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

