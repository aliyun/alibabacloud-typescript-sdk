// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportKgSchemaRequest extends $dara.Model {
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
   * The format of the exported content. Valid values: json and yaml. Default value: yaml.
   * 
   * @example
   * json
   */
  outputFormat?: string;
  /**
   * @remarks
   * The version number. If this parameter is empty or set to -1, the model metadata in draft state is returned. If this parameter is set to 0, the model metadata of the latest version is returned.
   * 
   * @example
   * 0
   */
  versionId?: number;
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

