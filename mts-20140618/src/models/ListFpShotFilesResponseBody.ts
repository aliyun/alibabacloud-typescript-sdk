// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFpShotFilesResponseBodyFpShotFileListFpShotFileInputFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input file is stored.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the OSS region in which the input file resides.
   * 
   * @example
   * oss-cn-beijing
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input file.
   * 
   * @example
   * example-****.mp4
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotFilesResponseBodyFpShotFileListFpShotFile extends $dara.Model {
  /**
   * @remarks
   * The ID of the video file.
   * 
   * @example
   * 41e6536e4f2250e2e9bf26cdea19****
   */
  fileId?: string;
  /**
   * @remarks
   * The information about the input file.
   */
  inputFile?: ListFpShotFilesResponseBodyFpShotFileListFpShotFileInputFile;
  /**
   * @remarks
   * The unique primary key of the input video.
   * 
   * @example
   * fb712a6890464059b1b2ea7c8647****
   */
  primaryKey?: string;
  /**
   * @remarks
   * The time when the media fingerprint file was stored. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * > This parameter is available only in the China (Beijing), China (Hangzhou), and China (Shanghai) regions.
   * 
   * @example
   * 2022-09-08T23:32:56Z
   */
  storeTime?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      inputFile: 'InputFile',
      primaryKey: 'PrimaryKey',
      storeTime: 'StoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      inputFile: ListFpShotFilesResponseBodyFpShotFileListFpShotFileInputFile,
      primaryKey: 'string',
      storeTime: 'string',
    };
  }

  validate() {
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotFilesResponseBodyFpShotFileList extends $dara.Model {
  fpShotFile?: ListFpShotFilesResponseBodyFpShotFileListFpShotFile[];
  static names(): { [key: string]: string } {
    return {
      fpShotFile: 'FpShotFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotFile: { 'type': 'array', 'itemType': ListFpShotFilesResponseBodyFpShotFileListFpShotFile },
    };
  }

  validate() {
    if(Array.isArray(this.fpShotFile)) {
      $dara.Model.validateArray(this.fpShotFile);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The media fingerprint files. For more information, see the "FpShotFile" section of the [Data types](https://help.aliyun.com/document_detail/29251.html) topic.
   */
  fpShotFileList?: ListFpShotFilesResponseBodyFpShotFileList;
  /**
   * @remarks
   * The returned value of NextPageToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * ae0fd49c0840e14daf0d66a75b83****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotFileList: 'FpShotFileList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotFileList: ListFpShotFilesResponseBodyFpShotFileList,
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.fpShotFileList && typeof (this.fpShotFileList as any).validate === 'function') {
      (this.fpShotFileList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

