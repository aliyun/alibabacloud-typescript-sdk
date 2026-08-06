// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKgSchemaRequestImportCommand extends $dara.Model {
  /**
   * @remarks
   * The knowledge graph definition content converted based on the specified format.
   * 
   * @example
   * name:xxx
   */
  content?: string;
  /**
   * @remarks
   * The format of the knowledge graph definition content. Valid values: json and yaml. Default value: yaml.
   * 
   * @example
   * yaml
   */
  inputFormat?: string;
  /**
   * @remarks
   * The merge strategy for the knowledge graph definition content. Valid values: replace and merge. Default value: replace.
   * 
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
   * The instruction for importing the knowledge graph definition.
   * 
   * This parameter is required.
   * 
   * @example
   * f1d4559a4db044158305e2d89bccf81f
   */
  importCommand?: ImportKgSchemaRequestImportCommand;
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
   * The workspace ID.
   * 
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

