// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationRecordDetailRequestRecordDetailCommand extends $dara.Model {
  /**
   * @remarks
   * The operation record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 987654321
   */
  operationId?: string;
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
      operationId: 'string',
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

export class GetOperationRecordDetailRequest extends $dara.Model {
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
  /**
   * @remarks
   * The query command.
   * 
   * This parameter is required.
   */
  recordDetailCommand?: GetOperationRecordDetailRequestRecordDetailCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      recordDetailCommand: 'RecordDetailCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      recordDetailCommand: GetOperationRecordDetailRequestRecordDetailCommand,
    };
  }

  validate() {
    if(this.recordDetailCommand && typeof (this.recordDetailCommand as any).validate === 'function') {
      (this.recordDetailCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

