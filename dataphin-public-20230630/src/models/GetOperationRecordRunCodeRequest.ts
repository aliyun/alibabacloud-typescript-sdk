// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationRecordRunCodeRequestCodeCommand extends $dara.Model {
  /**
   * @remarks
   * The operation log ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 987654321
   */
  operationId?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationRecordRunCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The query command.
   * 
   * This parameter is required.
   */
  codeCommand?: GetOperationRecordRunCodeRequestCodeCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      codeCommand: 'CodeCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeCommand: GetOperationRecordRunCodeRequestCodeCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.codeCommand && typeof (this.codeCommand as any).validate === 'function') {
      (this.codeCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

