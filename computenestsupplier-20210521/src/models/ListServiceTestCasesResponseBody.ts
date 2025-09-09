// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTestCasesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test-1
   */
  templateName?: string;
  /**
   * @remarks
   * The service test case id.
   * 
   * @example
   * stc-83fcee1383354e35b151
   */
  testCaseId?: string;
  /**
   * @remarks
   * The service test case name.
   * 
   * @example
   * case1
   */
  testCaseName?: string;
  /**
   * @remarks
   * The service test config.
   * 
   * @example
   * ---
   * parameters:
   *   PayType: "PostPaid"
   *   EcsInstanceType: "$[iact3-auto]"
   *   InstancePassword: "$[iact3-auto]"
   */
  testConfig?: string;
  static names(): { [key: string]: string } {
    return {
      templateName: 'TemplateName',
      testCaseId: 'TestCaseId',
      testCaseName: 'TestCaseName',
      testConfig: 'TestConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateName: 'string',
      testCaseId: 'string',
      testCaseName: 'string',
      testConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceTestCasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListServiceTestCasesResponseBodyData[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * CA3AE512-6D30-549A-B52D-B9042CA8D515
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 18
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListServiceTestCasesResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
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

