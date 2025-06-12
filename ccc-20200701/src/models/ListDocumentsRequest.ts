// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDocumentsRequestSorts } from "./ListDocumentsRequestSorts";


export class ListDocumentsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d278629c-c687-4aa3-b044-4fe9b012e7ef
   */
  instanceId?: string;
  /**
   * @example
   * eyJ0YWJsZUlkIjoiY2Y2MTQxYjA5NDY0NDUxMzk5YjFjMTA5YTMxZWNkMzEiLCJ0b2tlbiI6IjAwMDAwMDAwMDAwNzAzNzcifQ==
   */
  nextPageToken?: string;
  /**
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * EAF3C248-E123-441B-A545-B6CD02E98EED
   */
  requestId?: string;
  /**
   * @remarks
   * schema id
   * 
   * This parameter is required.
   * 
   * @example
   * profile
   */
  schemaId?: string;
  searchPattern?: string;
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

