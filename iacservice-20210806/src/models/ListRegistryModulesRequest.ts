// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistryModulesRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword. Fuzzy match on module names is supported.
   * 
   * @example
   * key
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * NamespaceName
   */
  namespaceName?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of NextToken returned in the previous API call.
   * 
   * @example
   * NFzbQCa7/yd7rAuSo5xZb54dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The filter condition for Registry module status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The workspace type. Valid values:
   * 
   * - system: public module
   * 
   * - self: custom module
   * 
   * - shared: shared module
   * 
   * - community: community module
   * 
   * By default, all types are returned.
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      namespaceName: 'namespaceName',
      nextToken: 'nextToken',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      namespaceName: 'string',
      nextToken: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

