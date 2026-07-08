// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentRetrieveResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Main text.
   * 
   * @example
   * 文章正文
   */
  essay?: string;
  /**
   * @remarks
   * Issuing agency.
   * 
   * @example
   * 发布机构
   */
  issuingAuthority?: string;
  /**
   * @remarks
   * URL.
   * 
   * @example
   * 文章链接
   */
  link?: string;
  /**
   * @remarks
   * Publication date.
   * 
   * @example
   * 2023-02-01
   */
  publicationDate?: string;
  /**
   * @remarks
   * Title.
   * 
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
   * @remarks
   * Status code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * Business data.
   * 
   * @example
   * data
   */
  data?: ListDocumentRetrieveResponseBodyData[];
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
   * Maximum number of records returned.
   * 
   * @example
   * 71
   */
  maxResults?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Token for the next page.
   * 
   * @example
   * cEoBWREAXdxaOyjq/cqAbg==
   */
  nextToken?: string;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded. A value of true indicates success. A value of false indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total count.
   * 
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

