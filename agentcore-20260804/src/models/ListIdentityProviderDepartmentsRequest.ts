// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProviderDepartmentsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of departments to return per page. Valid values: 1 to 50. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The next token returned from the previous page. Do not specify this parameter for the first query. To continue pagination, keep the identity provider and parentDepartmentId unchanged and pass the token as is. If the returned value is empty or not returned, it indicates that there are no subsequent pages at the current hierarchy.
   * 
   * @example
   * example-next-page-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the parent department. Specifies the department whose direct child departments you want to query. If this parameter is not specified or is left empty, the root hierarchy is queried without recursively returning all descendants. When expanding a node in the list, specify the ID of the node instead of its parentId.
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

