// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBatchTaskRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test task
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      fileId: 'FileId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      fileId: 'number',
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

export class DeleteBatchTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteCommand?: DeleteBatchTaskRequestDeleteCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      deleteCommand: 'DeleteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommand: DeleteBatchTaskRequestDeleteCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.deleteCommand && typeof (this.deleteCommand as any).validate === 'function') {
      (this.deleteCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

