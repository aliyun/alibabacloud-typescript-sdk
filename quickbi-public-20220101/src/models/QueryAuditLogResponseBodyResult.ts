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

