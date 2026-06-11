// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuditLogResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the log was generated.
   * 
   * @example
   * 2024-04-16 13:17:39
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The account name of the operator.
   * 
   * @example
   * wukaibis
   */
  operatorAccountName?: string;
  /**
   * @remarks
   * The nickname of the operator.
   * 
   * @example
   * buc_344078
   */
  operatorName?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * CREATE
   */
  operatorType?: string;
  /**
   * @remarks
   * The ID of the operation target.
   * 
   * @example
   * 1113***************8500
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the operation target.
   * 
   * @example
   * test
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the operation target.
   * 
   * @example
   * USER
   */
  targetType?: string;
  /**
   * @remarks
   * The workspace ID.
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
   * The request ID.
   * 
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * An array of log objects.
   */
  result?: QueryAuditLogResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
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

