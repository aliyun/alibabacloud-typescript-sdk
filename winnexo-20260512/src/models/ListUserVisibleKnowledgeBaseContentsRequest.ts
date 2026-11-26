// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserVisibleKnowledgeBaseContentsRequest extends $dara.Model {
  /**
   * @remarks
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy search on version names is supported.
   * 
   * @example
   * Product description
   */
  keyword?: string;
  /**
   * @remarks
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The field by which to sort the returned results. Valid values:
   * 
   * - event_time: the event creation time
   * - event_execute_start_time: the event execution start time
   * - event_execute_finish_time: the event execution completion time
   * 
   * @example
   * name
   */
  sortField?: string;
  /**
   * @remarks
   * Specifies the sort order. This parameter takes effect only when sortBy is specified. Valid values: ASC and DESC. The values are case-insensitive.
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The list of service source types.
   * 
   * @example
   * FILE,WEB_PAGE
   */
  sourceTypes?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. For winnexo-cli, it is explicitly passed by using the --tenant-id option.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      directoryId: 'directoryId',
      keyword: 'keyword',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      page: 'page',
      pageSize: 'pageSize',
      sortField: 'sortField',
      sortOrder: 'sortOrder',
      sourceTypes: 'sourceTypes',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      directoryId: 'string',
      keyword: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      page: 'number',
      pageSize: 'number',
      sortField: 'string',
      sortOrder: 'string',
      sourceTypes: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

