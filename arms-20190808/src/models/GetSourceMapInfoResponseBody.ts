// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceMapInfoResponseBodySourceMapList extends $dara.Model {
  /**
   * @remarks
   * The ID of the SourceMap file.
   */
  fid?: string;
  /**
   * @remarks
   * The name of the SourceMap file.
   * 
   * @example
   * test.sourcemap.js
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the file. Unit: KB.
   * 
   * @example
   * 201223
   */
  size?: string;
  /**
   * @remarks
   * The timestamp that indicates when the file was uploaded.
   * 
   * @example
   * 1590657842000
   */
  uploadTime?: string;
  /**
   * @remarks
   * The version of the file.
   * 
   * @example
   * 0.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      fid: 'Fid',
      fileName: 'FileName',
      size: 'Size',
      uploadTime: 'UploadTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fid: 'string',
      fileName: 'string',
      size: 'string',
      uploadTime: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourceMapInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C21AB7CF-B7AF-410F-BD61-82D1567F****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the SourceMap file.
   */
  sourceMapList?: GetSourceMapInfoResponseBodySourceMapList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sourceMapList: 'SourceMapList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sourceMapList: { 'type': 'array', 'itemType': GetSourceMapInfoResponseBodySourceMapList },
    };
  }

  validate() {
    if(Array.isArray(this.sourceMapList)) {
      $dara.Model.validateArray(this.sourceMapList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

