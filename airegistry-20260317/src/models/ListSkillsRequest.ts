// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @remarks
   * The field by which to sort the results. Set the value to download_count. Default value: gmt_modified.
   * 
   * @example
   * download_count
   */
  orderBy?: string;
  /**
   * @remarks
   * The owner by which to filter the results.
   * 
   * @example
   * user123
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The visibility by which to filter the results. Valid values:
   * 
   * - PUBLIC
   * - PRIVATE
   * 
   * @example
   * PUBLIC
   */
  scope?: string;
  /**
   * @remarks
   * The search mode. Valid values:
   * 
   * - accurate: exact match.
   * - blur: fuzzy match.
   * 
   * @example
   * blur
   */
  search?: string;
  /**
   * @remarks
   * The filter keyword.
   * 
   * @example
   * customer
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      orderBy: 'OrderBy',
      owner: 'Owner',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      scope: 'Scope',
      search: 'Search',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      orderBy: 'string',
      owner: 'string',
      pageNo: 'number',
      pageSize: 'number',
      scope: 'string',
      search: 'string',
      skillName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

