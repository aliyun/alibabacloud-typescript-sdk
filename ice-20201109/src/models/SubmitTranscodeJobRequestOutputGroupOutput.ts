// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranscodeJobRequestOutputGroupOutput extends $dara.Model {
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, set this parameter to the URL of an OSS object. Both the OSS and HTTP protocols are supported.
   * 
   * >  Before you use the OSS bucket in the URL, you must add the bucket on the [Storage Management](https://help.aliyun.com/document_detail/609918.html) page of the IMS console.
   * 
   * *   If Type is set to Media, set this parameter to the ID of a media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The URL of the output stream.\\
   * This parameter takes effect only when Type is set to Media. You can select a specific file within the media asset as an output.\\
   * Supported placeholders:
   * 
   * *   {MediaId}: the ID of the media asset.
   * *   {JobId}: the ID of the transcoding subjob.
   * *   {MediaBucket}: the bucket to which the media asset belongs.
   * *   {ExtName}: the file suffix, which uses the output format of the transcoding template.
   * *   {DestMd5}: the MD5 value of the transcoded output file.\\
   *     Notes:
   * 
   * 1.  This parameter must contain the {MediaId} and {JobId} placeholders.
   * 2.  The output bucket is the same as the bucket to which the media asset belongs.
   * 
   * @example
   * oss://bucket/path/to/{MediaId}/{JobId}.mp4
   */
  outputUrl?: string;
  /**
   * @remarks
   * The type of the media object. Valid values:
   * 
   * *   OSS: an OSS object.
   * *   Media: a media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      outputUrl: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

