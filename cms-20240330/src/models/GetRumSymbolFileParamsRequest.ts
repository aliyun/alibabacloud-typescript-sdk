// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumSymbolFileParamsRequest extends $dara.Model {
  /**
   * @remarks
   * The debug identifier of the symbol file, such as a UUID or Debug ID. This parameter is required for all file types except dsym.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  debugId?: string;
  /**
   * @remarks
   * The type of the file to upload. Valid values: sourcemap (.map), dsym (.dSYM.zip), proguard (.txt), native-symbol (.so), name-cache (.json/.txt), pdb (.pdb), sym (.sym), and symbol-zip (.zip). This parameter is used to apply for upload signature parameters. The value dimension differs from the artifactType filter parameter in the GetRumSymbolFiles query operation. Specifically, dsym (.dSYM.zip) is classified as artifactType=dsym during queries. symbol-zip (.zip) files are directly uploaded and archived with their original file names, and the current query operation does not support filtering by zip for artifactType.
   * 
   * This parameter is required.
   * 
   * @example
   * proguard
   */
  fileKind?: string;
  /**
   * @remarks
   * The name of the symbol file to upload. The file extension must match the fileKind.
   * 
   * This parameter is required.
   * 
   * @example
   * mapping.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the RUM application service.
   * 
   * This parameter is required.
   * 
   * @example
   * a1b2c3d4e5@f67890
   */
  serviceId?: string;
  /**
   * @remarks
   * The version number of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * default-cms-1234567890-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      debugId: 'debugId',
      fileKind: 'fileKind',
      fileName: 'fileName',
      serviceId: 'serviceId',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugId: 'string',
      fileKind: 'string',
      fileName: 'string',
      serviceId: 'string',
      version: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

