// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMaterialTaskListShrinkRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFh3Xqm+JgZ/U9Jyb7wdVr9LWk80Tghn5UZjbcWEVEderBcbVF+Y6PS0i8PpCL4PQZ3e0C9oEH0Asd4tJEuGtkl2WuKdiWZpEwadNydQdJPFM=
   */
  nextToken?: string;
  /**
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  statusListShrink?: string;
  taskTypeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      statusListShrink: 'StatusList',
      taskTypeListShrink: 'TaskTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      orderColumn: 'string',
      orderType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      statusListShrink: 'string',
      taskTypeListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

