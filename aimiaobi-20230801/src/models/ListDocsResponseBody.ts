// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Document folder.
   * 
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: number;
  /**
   * @remarks
   * Document ID.
   * 
   * @example
   * 12345
   */
  docId?: string;
  /**
   * @remarks
   * Document name.
   * 
   * @example
   * 标题093
   */
  docName?: string;
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Status message.
   * 
   * @example
   * 导入完成
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      docId: 'DocId',
      docName: 'DocName',
      docType: 'DocType',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      createTime: 'number',
      docId: 'string',
      docName: 'string',
      docType: 'string',
      status: 'number',
      statusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * List of returned data results.
   */
  data?: ListDocsResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Maximum number of results returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Next page token.
   * 
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJANEQ4mYAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM4NzA3MjZjN2E2NDYyNzUzODMxMzY3ODM0NmIzNTZkNjc=
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 70
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDocsResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

