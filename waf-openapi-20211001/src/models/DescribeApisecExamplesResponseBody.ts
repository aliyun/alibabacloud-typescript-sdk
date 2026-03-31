// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecExamplesResponseBodyExamplesRequestSensitiveData extends $dara.Model {
  /**
   * @example
   * 1000
   */
  sensitiveCode?: string;
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
   * @example
   * 1000
   */
  sensitiveCode?: string;
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
   * @example
   * http://www.test.com/api/v1/hello.php?token=TkJGQw
   */
  apiUrl?: string;
  pocPayload?: string;
  /**
   * @example
   * http
   */
  protocol?: string;
  request?: string;
  requestSensitiveData?: DescribeApisecExamplesResponseBodyExamplesRequestSensitiveData[];
  /**
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
  examples?: DescribeApisecExamplesResponseBodyExamples[];
  /**
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
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

