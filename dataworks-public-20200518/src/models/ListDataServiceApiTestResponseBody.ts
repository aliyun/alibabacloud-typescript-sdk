// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiTestResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataService Studio API on which the test is performed.
   * 
   * @example
   * 2343
   */
  apiId?: number;
  /**
   * @remarks
   * The time that is consumed to complete the test.
   * 
   * @example
   * 10
   */
  costTime?: number;
  /**
   * @remarks
   * The time when the test was initiated.
   * 
   * @example
   * 1651824913000
   */
  createTime?: number;
  /**
   * @remarks
   * The request parameters configured for the test.
   * 
   * @example
   * {"name":"test"}
   */
  paramMap?: string;
  /**
   * @remarks
   * The status code returned for the test. If the test is not complete, this parameter is not returned.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * The result returned for the test.
   * 
   * @example
   * {"id":2}
   */
  retResult?: string;
  /**
   * @remarks
   * The status of the test. Valid values: RUNNING and FINISHED.
   * 
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @remarks
   * The ID of the test.
   * 
   * @example
   * 123
   */
  testId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      costTime: 'CostTime',
      createTime: 'CreateTime',
      paramMap: 'ParamMap',
      retCode: 'RetCode',
      retResult: 'RetResult',
      status: 'Status',
      testId: 'TestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      costTime: 'number',
      createTime: 'number',
      paramMap: 'string',
      retCode: 'number',
      retResult: 'string',
      status: 'string',
      testId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiTestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of test records.
   */
  data?: ListDataServiceApiTestResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ESDAFWEA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataServiceApiTestResponseBodyData },
      requestId: 'string',
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

