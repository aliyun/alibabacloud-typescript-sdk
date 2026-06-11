// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @example
   * download_count
   */
  orderBy?: string;
  /**
   * @example
   * user123
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * PUBLIC
   */
  scope?: string;
  /**
   * @example
   * blur
   */
  search?: string;
  /**
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

