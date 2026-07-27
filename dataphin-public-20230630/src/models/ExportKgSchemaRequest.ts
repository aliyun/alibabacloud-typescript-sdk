// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportKgSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * json
   */
  outputFormat?: string;
  /**
   * @example
   * 0
   */
  versionId?: number;
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
      opTenantId: 'OpTenantId',
      outputFormat: 'OutputFormat',
      versionId: 'VersionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      outputFormat: 'string',
      versionId: 'number',
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

