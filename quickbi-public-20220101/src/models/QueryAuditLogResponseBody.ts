// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuditLogResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Log time.
   * 
   * @example
   * 2024-04-16 13:17:39
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Operator account.
   * 
   * @example
   * wukaibis
   */
  operatorAccountName?: string;
  /**
   * @remarks
   * Operator\\"s nickname.
   * 
   * @example
   * buc_344078
   */
  operatorName?: string;
  /**
   * @remarks
   * Operation type.
   * 
   * @example
   * CREATE
   */
  operatorType?: string;
  /**
   * @remarks
   * Target ID.
   * 
   * @example
   * 1113***************8500
   */
  targetId?: string;
  /**
   * @remarks
   * Target name.
   * 
   * @example
   * test
   */
  targetName?: string;
  /**
   * @remarks
   * Target type.
   * 
   * @example
   * USER
   */
  targetType?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      operatorAccountName: 'OperatorAccountName',
      operatorName: 'OperatorName',
      operatorType: 'OperatorType',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      operatorAccountName: 'string',
      operatorName: 'string',
      operatorType: 'string',
      targetId: 'string',
      targetName: 'string',
      targetType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * Array of logs.
   */
  result?: QueryAuditLogResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values: 
   * - true: The request succeeded 
   * - false: The request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryAuditLogResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

