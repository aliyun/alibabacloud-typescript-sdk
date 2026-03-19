// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSLARulesResponseBodySLARuleListSLARule extends $dara.Model {
  dagId?: number;
  id?: number;
  intervalMinutes?: number;
  nodeId?: number;
  ruleType?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      id: 'Id',
      intervalMinutes: 'IntervalMinutes',
      nodeId: 'NodeId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      id: 'number',
      intervalMinutes: 'number',
      nodeId: 'number',
      ruleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSLARulesResponseBodySLARuleList extends $dara.Model {
  SLARule?: ListSLARulesResponseBodySLARuleListSLARule[];
  static names(): { [key: string]: string } {
    return {
      SLARule: 'SLARule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLARule: { 'type': 'array', 'itemType': ListSLARulesResponseBodySLARuleListSLARule },
    };
  }

  validate() {
    if(Array.isArray(this.SLARule)) {
      $dara.Model.validateArray(this.SLARule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSLARulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 3D1A59F4-EB2B-5D24-80A5-90C446A00DE2
   */
  requestId?: string;
  SLARuleList?: ListSLARulesResponseBodySLARuleList;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      SLARuleList: 'SLARuleList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      SLARuleList: ListSLARulesResponseBodySLARuleList,
      success: 'boolean',
    };
  }

  validate() {
    if(this.SLARuleList && typeof (this.SLARuleList as any).validate === 'function') {
      (this.SLARuleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

