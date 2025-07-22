// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeSolutionResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The severity level. Valid values:
   * 
   * * **INFO**
   * * **WARN**
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * LARGE_ROWS_EXAMINED
   */
  ruleId?: string;
  /**
   * @remarks
   * The suggestion.
   * 
   * @example
   * LARGE_ROWS_EXAMINED_SOLUTION
   */
  solution?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  solutionExt?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      ruleId: 'RuleId',
      solution: 'Solution',
      solutionExt: 'SolutionExt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      ruleId: 'string',
      solution: 'string',
      solutionExt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeSolutionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  extra?: string;
  /**
   * @remarks
   * The optimization suggestions.
   */
  list?: GetQueryOptimizeSolutionResponseBodyDataList[];
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  pageNo?: number;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetQueryOptimizeSolutionResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeSolutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetQueryOptimizeSolutionResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30FF4E40-17F3-5A51-AB23-43F30D9B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQueryOptimizeSolutionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

