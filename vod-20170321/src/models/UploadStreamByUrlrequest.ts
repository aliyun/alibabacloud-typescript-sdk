// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadStreamByURLRequest extends $dara.Model {
  /**
   * @remarks
   * The quality of the video stream.
   * 
   * For more information about valid values of this parameter, see [Parameters for media assets](https://help.aliyun.com/document_detail/124671.html).
   * 
   * This parameter is required.
   * 
   * @example
   * HD
   */
  definition?: string;
  /**
   * @remarks
   * The file name extension of the transcoded stream.
   * 
   * For more information, see the Supported media file formats section in [Overview](https://help.aliyun.com/document_detail/55396.html).
   * 
   * If you set a value for this parameter, the file name extension specified in StreamURL is overwritten.
   * 
   * >  This parameter is required if you do not specify a file name extension in StreamURL.
   * 
   * @example
   * mp4
   */
  fileExtension?: string;
  /**
   * @remarks
   * The HDR type of the transcoded stream. Valid values:
   * 
   * *   HDR
   * *   HDR10
   * *   HLG
   * *   DolbyVision
   * *   HDRVivid
   * *   SDR+
   * 
   * > 
   * 
   * *   The HDR type of the transcoded stream is not case-sensitive.
   * 
   * *   You can leave this parameter empty for non-HDR streams.
   * 
   * @example
   * HDR10
   */
  HDRType?: string;
  /**
   * @remarks
   * The media ID in ApsaraVideo VOD.
   * 
   * This parameter is required.
   * 
   * @example
   * ca3a8f6e49*****57b65806709586
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the transcoded stream.
   * 
   * If URL authentication is required, you must pass authentication information in this parameter and make sure that the URL can be accessed over the Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/lesson-01.mp4
   */
  streamURL?: string;
  /**
   * @remarks
   * Metadata information for uploading media files, in JSON string format.
   * 
   * For more information, please refer to the table below for UploadMetadata.
   * 
   * @example
   * {"AddressMapping":"1","CustomPath":"test/xxx","CustomFileName":"xxx.mp4","isOverwritePath":"0"}
   */
  uploadMetadata?: string;
  /**
   * @remarks
   * The user-defined parameter. For more information, see the "UserData: specifies the custom configurations for media upload" section of the [Request parameters](https://help.aliyun.com/document_detail/86952.html) topic.
   * 
   * >  The callback configurations you specify for this parameter take effect only after you specify the HTTP callback URL and select specific callback events in the ApsaraVideo VOD console. For more information about how to configure HTTP callback settings in the ApsaraVideo VOD console, see [Configure callback settings](https://help.aliyun.com/document_detail/86071.html).
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

