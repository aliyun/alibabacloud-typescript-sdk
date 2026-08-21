// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadStreamByURLRequest extends $dara.Model {
  /**
   * @remarks
   * The definition of the video stream.
   * 
   * For valid values of this parameter, see [Media asset parameter description - Definition](https://help.aliyun.com/document_detail/124671.html).
   * 
   * This parameter is required.
   * 
   * @example
   * HD
   */
  definition?: string;
  /**
   * @remarks
   * The file name extension of the transcoded stream file.
   * 
   * For supported audio and video file formats, see [Overview](https://help.aliyun.com/document_detail/55396.html).
   * 
   * If this parameter is not empty, it overwrites the file name extension in the StreamURL.
   * 
   * >Notice: This parameter is required if the StreamURL does not contain a file name extension.
   * 
   * @example
   * mp4
   */
  fileExtension?: string;
  /**
   * @remarks
   * The HDR type of the transcoded stream. Valid values:
   * - HDR
   * - HDR10
   * - HLG
   * - DolbyVision
   * - HDRVivid
   * - SDR+
   * > - Case-insensitive.
   * > - Leave this parameter empty for non-HDR videos.
   * 
   * @example
   * HDR10
   */
  HDRType?: string;
  /**
   * @remarks
   * The ID of the ApsaraVideo VOD media asset that corresponds to the transcoded stream.
   * 
   * This parameter is required.
   * 
   * @example
   * ca3a8f6e49*****57b65806709586
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the transcoded stream file.
   * 
   * If the URL of the transcoded stream requires authentication, include the authentication parameters in StreamURL and make sure the URL is accessible through public network access.
   * >You can obtain the audio or video URL from the console or by invoking the GetPlayInfo operation.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/lesson-01.mp4
   */
  streamURL?: string;
  /**
   * @remarks
   * The metadata of the media file to upload. The value is a JSON string.
   * - For more information, see the **UploadMetadata** table below.
   * 
   * @example
   * {"AddressMapping":"1","CustomPath":"test/xxx","CustomFileName":"xxx.mp4","isOverwritePath":"0"}
   */
  uploadMetadata?: string;
  /**
   * @remarks
   * The custom parameter. For more information, see [UserData](https://help.aliyun.com/document_detail/86952.html).
   * > To use the message callback in this parameter, configure the HTTP callback URL and select the corresponding callback event types in the console. Otherwise, the callback settings do not take effect. For information about how to configure HTTP callbacks in the console, see [Callback settings](https://help.aliyun.com/document_detail/86071.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://aliyundoc.com"}, "Extend":{"localId":"xxx","test":"www"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      fileExtension: 'FileExtension',
      HDRType: 'HDRType',
      mediaId: 'MediaId',
      streamURL: 'StreamURL',
      uploadMetadata: 'UploadMetadata',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      fileExtension: 'string',
      HDRType: 'string',
      mediaId: 'string',
      streamURL: 'string',
      uploadMetadata: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

