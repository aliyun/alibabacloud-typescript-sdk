// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDNAFilesResponseBodyFileListInputFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input file is stored.
   * 
   * @example
   * example-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the input file resides.
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

export class ListDNAFilesResponseBodyFileList extends $dara.Model {
  /**
   * @remarks
   * The Object Storage Service (OSS) information about the input file.
   */
  inputFile?: ListDNAFilesResponseBodyFileListInputFile;
  /**
   * @remarks
   * The primary key of the file.
   * 
   * @example
   * ae0fd49c0840e14daf0d66a75b83****
   */
  primaryKey?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      primaryKey: 'PrimaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: ListDNAFilesResponseBodyFileListInputFile,
      primaryKey: 'string',
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

export class ListDNAFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried files.
   */
  fileList?: ListDNAFilesResponseBodyFileList[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * ae0fd49c0840e14daf0d66a75b83****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2AE89FA5-E620-56C7-9B80-75D09757385A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileList: 'FileList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileList: { 'type': 'array', 'itemType': ListDNAFilesResponseBodyFileList },
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

