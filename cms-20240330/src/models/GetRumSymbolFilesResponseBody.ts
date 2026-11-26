// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumSymbolFilesResponseBodyFiles extends $dara.Model {
  /**
   * @remarks
   * The object path of the symbol file.
   * 
   * @example
   * user/workspace/service-id/3.0.0/build-1/new-app.map
   */
  artifactPath?: string;
  /**
   * @remarks
   * The type of the symbol file.
   * 
   * @example
   * map
   */
  artifactType?: string;
  /**
   * @remarks
   * The name of the symbol file.
   * 
   * @example
   * new-app.map
   */
  fileName?: string;
  /**
   * @remarks
   * The list of matched search keywords.
   * 
   * @example
   * ["new-app"]
   */
  matchedKeywords?: string[];
  /**
   * @remarks
   * The platform type to which the file belongs.
   * 
   * @example
   * web
   */
  platform?: string;
  /**
   * @remarks
   * The size of the file in bytes.
   * 
   * @example
   * 512
   */
  size?: number;
  /**
   * @remarks
   * The source of the symbol file. This query API returns only symbol files uploaded by users, which is fixed to user. The value system is reserved for internal system symbols of the platform.
   * 
   * @example
   * user
   */
  source?: string;
  /**
   * @remarks
   * The timestamp of the last time the file was updated, in milliseconds.
   * 
   * @example
   * 1778806923000
   */
  updateTime?: number;
  /**
   * @remarks
   * The UUID or Debug ID of the symbol file.
   * 
   * @example
   * build-1
   */
  uuid?: string;
  /**
   * @remarks
   * The associated application version number.
   * 
   * @example
   * 3.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      artifactPath: 'artifactPath',
      artifactType: 'artifactType',
      fileName: 'fileName',
      matchedKeywords: 'matchedKeywords',
      platform: 'platform',
      size: 'size',
      source: 'source',
      updateTime: 'updateTime',
      uuid: 'uuid',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactPath: 'string',
      artifactType: 'string',
      fileName: 'string',
      matchedKeywords: { 'type': 'array', 'itemType': 'string' },
      platform: 'string',
      size: 'number',
      source: 'string',
      updateTime: 'number',
      uuid: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.matchedKeywords)) {
      $dara.Model.validateArray(this.matchedKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRumSymbolFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of symbol files.
   */
  files?: GetRumSymbolFilesResponseBodyFiles[];
  /**
   * @remarks
   * Indicates whether more data is available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The pagination token for the next page. The example is for illustration purposes only and cannot be used for actual queries. To query the next page, use the actual value returned in the response.
   * 
   * @example
   * next
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'files',
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      pageSize: 'pageSize',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': GetRumSymbolFilesResponseBodyFiles },
      hasMore: 'boolean',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

