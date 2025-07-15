// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocsResponseBodyData extends $dara.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: number;
  /**
   * @example
   * 12345
   */
  docId?: string;
  docName?: string;
  /**
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @example
   * 0
   */
  status?: number;
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
   * @example
   * successful
   */
  code?: string;
  data?: ListDocsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJANEQ4mYAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM4NzA3MjZjN2E2NDYyNzUzODMxMzY3ODM0NmIzNTZkNjc=
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

