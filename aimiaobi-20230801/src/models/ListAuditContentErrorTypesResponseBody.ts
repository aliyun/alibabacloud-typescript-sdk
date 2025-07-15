// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuditContentErrorTypesResponseBodyDataSubClasses extends $dara.Model {
  /**
   * @example
   * PunctuationError
   */
  classCode?: string;
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
   * @example
   * ContentAccuracy
   */
  majorClassCode?: string;
  majorClassName?: string;
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
   * @example
   * DataNotExists
   */
  code?: string;
  data?: ListAuditContentErrorTypesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
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
   * @example
   * true
   */
  success?: boolean;
  /**
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

