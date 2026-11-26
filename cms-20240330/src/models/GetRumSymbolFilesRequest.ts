// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumSymbolFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter for the symbol file type. Valid values: map, dsym, txt, so, sym, pdb, and json. This parameter is used for query filtering and differs from the fileKind dimension in the upload API GetRumSymbolFileParams: uploading dsym (.dSYM.zip) corresponds to artifactType=dsym; standard symbol-zip (.zip) is not currently supported for filtering by artifactType.
   * 
   * @example
   * txt
   */
  artifactType?: string;
  /**
   * @remarks
   * The list of search keywords. You can specify up to 50 keywords to match file names, UUIDs, version numbers, and more.
   * 
   * @example
   * ["new-app"]
   */
  keywords?: string[];
  /**
   * @remarks
   * The paging token. To query the next page, specify the nextToken value returned in the previous response. The example is for illustration purposes only and cannot be used for actual queries.
   * 
   * @example
   * next
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The filter for the platform type. Valid values: web, miniapp, minigame, uniapp, android, ios, harmonyos, windows, macos, and linux.
   * 
   * @example
   * android
   */
  platform?: string;
  /**
   * @remarks
   * The service ID of the RUM application. This parameter is required, cannot be an empty string, and must be used together with workspace to locate the application.
   * 
   * This parameter is required.
   * 
   * @example
   * a1b2c3d4e5@f67890
   */
  serviceId?: string;
  /**
   * @remarks
   * The filter for the application version number.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The name of the workspace to which the RUM application belongs. This parameter is required, cannot be an empty string, and must be used together with serviceId to locate the application.
   * 
   * This parameter is required.
   * 
   * @example
   * default-cms-1234567890-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'artifactType',
      keywords: 'keywords',
      nextToken: 'nextToken',
      pageSize: 'pageSize',
      platform: 'platform',
      serviceId: 'serviceId',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      pageSize: 'number',
      platform: 'string',
      serviceId: 'string',
      version: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

