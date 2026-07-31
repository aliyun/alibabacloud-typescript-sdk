// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecExamplesResponseBodyExamplesRequestSensitiveData extends $dara.Model {
  /**
   * @remarks
   * The sensitive information type.
   * 
   * @example
   * 1000
   */
  sensitiveCode?: string;
  /**
   * @remarks
   * The list of sensitive data.
   */
  sensitiveDataList?: string[];
  static names(): { [key: string]: string } {
    return {
      sensitiveCode: 'SensitiveCode',
      sensitiveDataList: 'SensitiveDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveCode: 'string',
      sensitiveDataList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveDataList)) {
      $dara.Model.validateArray(this.sensitiveDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecExamplesResponseBodyExamplesResponseSensitiveData extends $dara.Model {
  /**
   * @remarks
   * The sensitive information type.
   * 
   * @example
   * 1000
   */
  sensitiveCode?: string;
  /**
   * @remarks
   * The list of sensitive data.
   */
  sensitiveDataList?: string[];
  static names(): { [key: string]: string } {
    return {
      sensitiveCode: 'SensitiveCode',
      sensitiveDataList: 'SensitiveDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveCode: 'string',
      sensitiveDataList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveDataList)) {
      $dara.Model.validateArray(this.sensitiveDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecExamplesResponseBodyExamples extends $dara.Model {
  /**
   * @remarks
   * The full request path.
   * 
   * @example
   * http://www.test.com/api/v1/hello.php?token=TkJGQw
   */
  apiUrl?: string;
  /**
   * @remarks
   * The verification request.
   */
  pocPayload?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * - **http**: HTTP protocol.
   * 
   * - **https**: HTTPS protocol.
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * The sample request content, which is a character string converted from a JSON format constructed with a series of parameters. The following fields are included:
   * - **method**: the request method.
   * - **host**: the request domain name.
   * - **header**: the request header.
   * - **server_port**: the service port.
   * - **body**: the request body content.
   * - **url**: the request path.
   * - **server_protocol**: the server protocol.
   * 
   * > If the **body** content exceeds 16 KB, only partial content is returned.
   */
  request?: string;
  /**
   * @remarks
   * The list of request sensitive data.
   */
  requestSensitiveData?: DescribeApisecExamplesResponseBodyExamplesRequestSensitiveData[];
  /**
   * @remarks
   * The sample response content, which is a string converted from a JSON object constructed with a series of parameters. The following fields are included:
   * - **status**: the status code.
   * - **header**: the response header.
   * - **body**: the response body content.
   * 
   * > If the **body** content exceeds 16 KB, only partial content is returned.
   * 
   * @example
   * {
   *   "header": {
   *     "Connection": "keep-alive",
   *     "Content-Encoding": "gzip",
   *     "Content-Type": "text/html; charset=UTF-8"
   *   },
   *   "body": "xxxx",
   *   "status": 200
   * }
   */
  response?: string;
  /**
   * @remarks
   * The list of response sensitive data.
   */
  responseSensitiveData?: DescribeApisecExamplesResponseBodyExamplesResponseSensitiveData[];
  static names(): { [key: string]: string } {
    return {
      apiUrl: 'ApiUrl',
      pocPayload: 'PocPayload',
      protocol: 'Protocol',
      request: 'Request',
      requestSensitiveData: 'RequestSensitiveData',
      response: 'Response',
      responseSensitiveData: 'ResponseSensitiveData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUrl: 'string',
      pocPayload: 'string',
      protocol: 'string',
      request: 'string',
      requestSensitiveData: { 'type': 'array', 'itemType': DescribeApisecExamplesResponseBodyExamplesRequestSensitiveData },
      response: 'string',
      responseSensitiveData: { 'type': 'array', 'itemType': DescribeApisecExamplesResponseBodyExamplesResponseSensitiveData },
    };
  }

  validate() {
    if(Array.isArray(this.requestSensitiveData)) {
      $dara.Model.validateArray(this.requestSensitiveData);
    }
    if(Array.isArray(this.responseSensitiveData)) {
      $dara.Model.validateArray(this.responseSensitiveData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecExamplesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of samples.
   */
  examples?: DescribeApisecExamplesResponseBodyExamples[];
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 5. Default value: 5. This parameter is used for paging.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      examples: 'Examples',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      examples: { 'type': 'array', 'itemType': DescribeApisecExamplesResponseBodyExamples },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.examples)) {
      $dara.Model.validateArray(this.examples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

