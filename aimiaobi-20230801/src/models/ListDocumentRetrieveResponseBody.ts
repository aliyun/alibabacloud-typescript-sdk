// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentRetrieveResponseBodyData extends $dara.Model {
  /**
   * @example
   * 文章正文
   */
  essay?: string;
  /**
   * @example
   * 发布机构
   */
  issuingAuthority?: string;
  /**
   * @example
   * 文章链接
   */
  link?: string;
  /**
   * @example
   * 2023-02-01
   */
  publicationDate?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      essay: 'Essay',
      issuingAuthority: 'IssuingAuthority',
      link: 'Link',
      publicationDate: 'PublicationDate',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      essay: 'string',
      issuingAuthority: 'string',
      link: 'string',
      publicationDate: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentRetrieveResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  /**
   * @example
   * data
   */
  data?: ListDocumentRetrieveResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 71
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * cEoBWREAXdxaOyjq/cqAbg==
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
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
      data: { 'type': 'array', 'itemType': ListDocumentRetrieveResponseBodyData },
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

