// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBaseDocument } from "./KnowledgeBaseDocument";


export class ListLumaDocumentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of document entries.
   * 
   * @example
   * [{"DocumentId":"doc-bp1xxxxxxxxxxxx","FileName":"manual.pdf","Status":"COMPLETED"}]
   */
  documents?: KnowledgeBaseDocument[];
  /**
   * @remarks
   * The pagination token for the next page. This is an opaque string. Pass this value as the NextToken parameter in the next request to retrieve the next page. An empty value indicates that no more data is available.
   * 
   * @example
   * ca1eb85f5d99c7d6a97e6****
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of documents that match the filter conditions.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': KnowledgeBaseDocument },
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLumaDocumentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates that the call succeeds. If the call fails, a specific error code is returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The document list result, which contains document entries and pagination information.
   */
  data?: ListLumaDocumentsResponseBodyData;
  /**
   * @remarks
   * The message returned by the operation. The value is Operation success if the call succeeds, or a specific error description if the call fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. You can use this ID for troubleshooting and when you submit a ticket.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call succeeds.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListLumaDocumentsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

