// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesShrinkRequest extends $dara.Model {
  /**
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * maxcompute-schema:123456XXX::test_project_with_schema:default
   * maxcompute-project:123456XXX::test_project_without_schema
   * dlf-database:123456XXX:test_catalog:test_db
   * hms-database:c-abc123xxx::test_db
   * holo-schema:h-abc123xxx::test_db:test_schema
   * mysql-database:jdbc%3Amysql%3A%2F%2F127.0.0.1%3A3306%2Ftest_db::test_db
   */
  parentMetaEntityId?: string;
  /**
   * @example
   * CreateTime
   */
  sortBy?: string;
  tableTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentMetaEntityId: 'ParentMetaEntityId',
      sortBy: 'SortBy',
      tableTypesShrink: 'TableTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentMetaEntityId: 'string',
      sortBy: 'string',
      tableTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

