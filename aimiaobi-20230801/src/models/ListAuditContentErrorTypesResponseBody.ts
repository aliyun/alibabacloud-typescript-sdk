// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuditContentErrorTypesResponseBodyDataSubClasses extends $dara.Model {
  /**
   * @remarks
   * Sub-audit dimension code
   * 
   * @example
   * PunctuationError
   */
  classCode?: string;
  /**
   * @remarks
   * Sub-audit dimension name
   * 
   * @example
   * 标点符号错误
   */
  className?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      className: 'ClassName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      className: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuditContentErrorTypesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Main audit dimension code
   * 
   * @example
   * ContentAccuracy
   */
  majorClassCode?: string;
  /**
   * @remarks
   * Sub-audit dimension name
   * 
   * @example
   * 内容准确性
   */
  majorClassName?: string;
  /**
   * @remarks
   * List of sub-audit dimensions
   */
  subClasses?: ListAuditContentErrorTypesResponseBodyDataSubClasses[];
  static names(): { [key: string]: string } {
    return {
      majorClassCode: 'MajorClassCode',
      majorClassName: 'MajorClassName',
      subClasses: 'SubClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      majorClassCode: 'string',
      majorClassName: 'string',
      subClasses: { 'type': 'array', 'itemType': ListAuditContentErrorTypesResponseBodyDataSubClasses },
    };
  }

  validate() {
    if(Array.isArray(this.subClasses)) {
      $dara.Model.validateArray(this.subClasses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuditContentErrorTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * List of audit dimensions
   */
  data?: ListAuditContentErrorTypesResponseBodyData[];
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Maximum number of records returned in this response
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Token for the next page
   * 
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 20
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
      data: { 'type': 'array', 'itemType': ListAuditContentErrorTypesResponseBodyData },
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

