// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The content pattern used for fuzzy match search.
   * 
   * @example
   * user preference
   */
  contentPattern?: string;
  /**
   * @remarks
   * The current Data Management unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The source ID.
   * - If MemFrom is set to session, FromId indicates the session ID.
   * - If MemFrom is set to user, FromId indicates the RAM user ID.
   * 
   * @example
   * 8zm3**********g3yxa1
   */
  fromId?: string;
  /**
   * @remarks
   * The memory source. Valid values:
   * - session: Generated from a session.
   * - user: Edited by a user.
   * 
   * @example
   * session
   */
  memFrom?: string;
  /**
   * @remarks
   * The sort order for the specified sort field. Default value: desc. Valid values:
   * - asc: Ascending order.
   * - desc: Descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The sort field. Default value: hitTimes. Valid values:
   * - hitTimes: The number of hits.
   * - created: The creation time.
   * 
   * @example
   * hitTimes
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The maximum number of entries per page. Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to query memories in all statuses. Default value: true.
   * 
   * @example
   * true
   */
  queryAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      contentPattern: 'ContentPattern',
      DMSUnit: 'DMSUnit',
      fromId: 'FromId',
      memFrom: 'MemFrom',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryAll: 'QueryAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentPattern: 'string',
      DMSUnit: 'string',
      fromId: 'string',
      memFrom: 'string',
      order: 'string',
      orderBy: 'string',
      pageNum: 'number',
      pageSize: 'number',
      queryAll: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

