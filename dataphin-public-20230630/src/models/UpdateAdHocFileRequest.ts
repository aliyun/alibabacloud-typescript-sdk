// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAdHocFileRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * select 1;
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2311113
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1212313
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileId: 'FileId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

export class UpdateAdHocFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateAdHocFileRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateAdHocFileRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

