// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLineageRequest extends $dara.Model {
  /**
   * @remarks
   * The lineage type. Valid values:
   * 
   * *   up: ancestor lineage
   * *   down: descendant lineage
   * 
   * This parameter is required.
   * 
   * @example
   * up
   */
  direction?: string;
  /**
   * @remarks
   * The unique identifier of the entity.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table.project.table
   */
  entityQualifiedName?: string;
  /**
   * @remarks
   * The keyword of the entity name.
   * 
   * @example
   * name-keyword
   */
  keyword?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * next-token-from-previous-request
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      entityQualifiedName: 'EntityQualifiedName',
      keyword: 'Keyword',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      entityQualifiedName: 'string',
      keyword: 'string',
      nextToken: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

