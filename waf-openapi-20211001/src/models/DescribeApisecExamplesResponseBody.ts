// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecExamplesResponseBodyExamplesRequestSensitiveData extends $dara.Model {
  /**
   * @remarks
   * The code that indicates the type of sensitive data in the request.
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
   * The code that indicates the type of sensitive data in the response.
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
   * The complete URL of the API request.
   * 
   * @example
   * http://www.test.com/api/v1/hello.php?token=TkJGQw
   */
  apiUrl?: string;
  /**
   * @remarks
   * The proof-of-concept (PoC) request.
   */
  pocPayload?: string;
  /**
   * @remarks
   * The protocol type of the API request. Valid values:
   * 
   * - **http**: HTTP
   * 
   * - **https**: HTTPS
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * The content of the sample request. This is a string converted from a JSON object that consists of a series of parameters. The JSON object contains the following fields:
   * 
   * - **method**: the request method.
   * 
   * - **host**: the requested domain name.
   * 
   * - **header**: the request header.
   * 
   * - **server_port**: the service port.
   * 
   * - **body**: the request body.
   * 
   * - **url**: the URI of the request.
   * 
   * - **server_protocol**: the server-side protocol.
   * 
   * > If the **body** content exceeds 16 KB, only a portion of the content is returned.
   */
  request?: string;
  /**
   * @remarks
   * The list of sensitive data in the request.
   */
  requestSensitiveData?: DescribeApisecExamplesResponseBodyExamplesRequestSensitiveData[];
  /**
   * @remarks
   * The content of the sample response. This is a string converted from a JSON object that consists of a series of parameters. The JSON object contains the following fields:
   * 
   * - **status**: the status code.
   * 
   * - **header**: the response header.
   * 
   * - **body**: the response body.
   * 
   * > If the **body** content exceeds 16 KB, only a portion of the content is returned.
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
   * The list of sensitive data in the response.
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
   * The list of API security examples.
   */
  examples?: DescribeApisecExamplesResponseBodyExamples[];
  /**
   * @remarks
   * The number of entries returned on each page. Valid values: 1 to 5. Default value: 5.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

