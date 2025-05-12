// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFpShotFilesResponseBodyFpShotFileListFpShotFileInputFile } from "./ListFpShotFilesResponseBodyFpShotFileListFpShotFileInputFile";


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

