// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the file.
   * 
   * @example
   * 1912.13
   */
  bitrate?: string;
  /**
   * @remarks
   * The time when the file was created.
   * 
   * @example
   * 2022-05-30T02:02:17Z
   */
  createTime?: string;
  /**
   * @remarks
   * The duration of the file.
   * 
   * @example
   * 60.00000
   */
  duration?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * 164265080291300080527050.wav
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the file in bytes.
   * 
   * @example
   * 324784
   */
  fileSize?: string;
  /**
   * @remarks
   * The status of the file.
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * The type of the file.
   * 
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the file.
   * 
   * @example
   * https://outin-d3f4681ddfd911ec99a600163e1403e7.oss-cn-shanghai.aliyuncs.com/sv/23d5cdd1-18180984899/23d5cdd1-18180984899.mp4
   */
  fileUrl?: string;
  /**
   * @remarks
   * The encapsulation format of the file.
   * 
   * @example
   * mov,mp4,m4a,3gp,3g2,mj2
   */
  formatName?: string;
  /**
   * @remarks
   * The height of the file.
   * 
   * @example
   * 480
   */
  height?: string;
  /**
   * @remarks
   * The time when the file was last modified.
   * 
   * @example
   * 2021-12-10T12:19Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The region in which the file is stored.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The width of the file.
   * 
   * @example
   * 1920
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      createTime: 'CreateTime',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      modifiedTime: 'ModifiedTime',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      createTime: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      modifiedTime: 'string',
      region: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

