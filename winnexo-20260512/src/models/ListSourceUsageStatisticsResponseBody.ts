// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSourceUsageStatisticsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time of the most recent reporting and ingestion within the filtered range.
   * 
   * @example
   * 2024-10-02 11:20:09
   */
  lastEventTime?: string;
  /**
   * @remarks
   * The number of deduplicated sources.
   * 
   * @example
   * 10
   */
  retrievalCount?: number;
  /**
   * @remarks
   * The ID of the data source, which is unique within the tenant.
   * 
   * @example
   * 8
   */
  sourceId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test123
   */
  sourceName?: string;
  /**
   * @remarks
   * The skill source type.
   * 
   * @example
   * BUILTIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The number of used sources.
   * 
   * @example
   * 8
   */
  usageCount?: number;
  static names(): { [key: string]: string } {
    return {
      lastEventTime: 'lastEventTime',
      retrievalCount: 'retrievalCount',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      sourceType: 'sourceType',
      usageCount: 'usageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastEventTime: 'string',
      retrievalCount: 'number',
      sourceId: 'string',
      sourceName: 'string',
      sourceType: 'string',
      usageCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourceUsageStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether there is a next page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The user information.
   * 
   * @example
   * [{"sourceId":"src_9401","sourceName":"Product documentation","sourceType":"KNOWLEDGE_BASE","retrievalCount":12,"usageCount":5,"lastEventTime":"2026-11-05T08:00:00Z"}]
   */
  items?: ListSourceUsageStatisticsResponseBodyItems[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The page size. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasMore: 'hasMore',
      items: 'items',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListSourceUsageStatisticsResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

