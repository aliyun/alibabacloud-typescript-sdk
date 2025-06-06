// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 888.563
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the video.
   * 
   * @example
   * 403.039999
   */
  duration?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * file.m3u8
   */
  fileName?: string;
  /**
   * @remarks
   * The file size.
   * 
   * @example
   * 31737
   */
  fileSize?: string;
  /**
   * @remarks
   * The state of the file.
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @remarks
   * The URL of the file.
   * 
   * @example
   * http://bucket.oss-cn-shanghai.aliyuncs.com/path/to/file.m3u8
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the video format.
   * 
   * @example
   * hls,applehttp
   */
  formatName?: string;
  /**
   * @remarks
   * The height of the output video.
   * 
   * @example
   * 478
   */
  height?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 2b36bd19c13f4145b094c0cad80dbce5
   */
  mediaId?: string;
  /**
   * @remarks
   * The region in which the file resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The width of the output video.
   * 
   * @example
   * 848
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      mediaId: 'MediaId',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      mediaId: 'string',
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

