// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentsRequestSorts extends $dara.Model {
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * - ASC (default): ascending order.
   * 
   * - DESC: descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * name
   */
  propertyName?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      propertyName: 'PropertyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      propertyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d278629c-c687-4aa3-b044-4fe9b012e7ef
   */
  instanceId?: string;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * eyJ0YWJsZUlkIjoiY2Y2MTQxYjA5NDY0NDUxMzk5YjFjMTA5YTMxZWNkMzEiLCJ0b2tlbiI6IjAwMDAwMDAwMDAwNzAzNzcifQ==
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EAF3C248-E123-441B-A545-B6CD02E98EED
   */
  requestId?: string;
  /**
   * @remarks
   * The schema ID.
   * 
   * This parameter is required.
   * 
   * @example
   * profile
   */
  schemaId?: string;
  /**
   * @remarks
   * The search conditional expression.
   * 
   * @example
   * 支持Lucene搜索语法
   */
  searchPattern?: string;
  /**
   * @remarks
   * The custom sorting value.
   */
  sorts?: ListDocumentsRequestSorts[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      schemaId: 'SchemaId',
      searchPattern: 'SearchPattern',
      sorts: 'Sorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      schemaId: 'string',
      searchPattern: 'string',
      sorts: { 'type': 'array', 'itemType': ListDocumentsRequestSorts },
    };
  }

  validate() {
    if(Array.isArray(this.sorts)) {
      $dara.Model.validateArray(this.sorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

