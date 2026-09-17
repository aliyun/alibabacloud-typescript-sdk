// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBaseDocument } from "./KnowledgeBaseDocument";


export class ListDocumentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of document entries in the knowledge base. Each entry contains information such as the document ID, file name, processing status, size, number of chunks, and metadata.
   * 
   * @example
   * [{"DocumentId":"doc-bp1xxxxxxxxxxxx","FileName":"manual.pdf","Status":"COMPLETED","ChunkCount":120}]
   */
  documents?: KnowledgeBaseDocument[];
  /**
   * @remarks
   * The maximum number of results per page that took effect for this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page (an opaque string). Pass this value as the NextToken parameter in the next request to retrieve the next page. An empty value indicates that no more data is available.
   * 
   * @example
   * ca1eb85f5d99c7d6a97e6****
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of documents that match the filter conditions. Use an empty NextToken value as the termination condition for pagination.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': KnowledgeBaseDocument },
      maxResults: 'number',
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

export class ListDocumentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates a successful operation. If the operation fails, a specific error code is returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The document list query result, which contains document entries and pagination information.
   */
  data?: ListDocumentsResponseBodyData;
  /**
   * @remarks
   * The message returned by the operation. The value is Operation success if the operation succeeds, or a specific error description if the operation fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. Use this ID for troubleshooting and when you submit a ticket.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success.
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
      data: ListDocumentsResponseBodyData,
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

