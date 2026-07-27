// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKgSchemaRequestImportCommand extends $dara.Model {
  /**
   * @example
   * name:xxx
   */
  content?: string;
  /**
   * @example
   * yaml
   */
  inputFormat?: string;
  /**
   * @example
   * replace
   */
  mergeStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      inputFormat: 'InputFormat',
      mergeStrategy: 'MergeStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      inputFormat: 'string',
      mergeStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKgSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f1d4559a4db044158305e2d89bccf81f
   */
  importCommand?: ImportKgSchemaRequestImportCommand;
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
   * 
   * @example
   * f1d4559a4db044158305e2d89bccf81f
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      importCommand: 'ImportCommand',
      opTenantId: 'OpTenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importCommand: ImportKgSchemaRequestImportCommand,
      opTenantId: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.importCommand && typeof (this.importCommand as any).validate === 'function') {
      (this.importCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

