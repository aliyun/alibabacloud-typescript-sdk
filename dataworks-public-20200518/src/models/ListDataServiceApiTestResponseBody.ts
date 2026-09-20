// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiTestResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the API to test.
   * 
   * @example
   * 2343
   */
  apiId?: number;
  /**
   * @remarks
   * The time consumed by the API request.
   * 
   * @example
   * 10
   */
  costTime?: number;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * The value is a 13-digit number, such as `1651824913000`.
   * 
   * @example
   * 1651824913000
   */
  createTime?: number;
  /**
   * @remarks
   * The request parameters of the test API.
   * 
   * @example
   * {"name":"test"}
   */
  paramMap?: string;
  /**
   * @remarks
   * The return code of the test API. This field is empty if the test is not completed.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {"id":2}
   */
  retResult?: string;
  /**
   * @remarks
   * Indicates whether the task is completed. Valid values:
   * 
   * - RUNNING
   * - FINISHED
   * 
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @remarks
   * The test ID.
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
   * The data list.
   */
  data?: ListDataServiceApiTestResponseBodyData[];
  /**
   * @remarks
   * The request ID.
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

