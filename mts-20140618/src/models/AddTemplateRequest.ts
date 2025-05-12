// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The audio stream settings. The value must be a JSON object. For more information, see [Audio](https://help.aliyun.com/document_detail/29253.html).
   * 
   * > If you do not specify this parameter, output files do not contain audio streams. This parameter is required if you want to retain the audio streams.
   * 
   * @example
   * {"Codec":"H.264","Samplerate":"44100","Bitrate":"500","Channels":"2"}
   */
  audio?: string;
  /**
   * @remarks
   * The container format. The value must be a JSON object that contains the Format parameter. If you do not specify this parameter, the transcoded media file is in MP4 format by default. This parameter is required if you want to use the transcoding template to generate media files in other formats. For more information, see [Container](https://help.aliyun.com/document_detail/29253.html).
   * 
   * *   Default value: MP4.
   * *   Video transcoding supports the following formats: FLV, MP4, HLS (M3U8 + TS), and MPEG-DASH (MPD + fMP4).
   * 
   * > If the container format is FLV, the video codec cannot be set to H.265.
   * 
   * *   Audio transcoding supports the following formats: MP3, MP4, OGG, FLAC, and M4A.
   * *   Image transcoding supports the GIF and WebP formats.
   * 
   * > 
   * 
   * *   If the container format is GIF, the video codec must be set to GIF.
   * 
   * *   If the container format is WebP, the video codec must be set to WebP.
   * 
   * @example
   * {"Format":"mp4"}
   */
  container?: string;
  /**
   * @remarks
   * The segment settings. The value must be a JSON object. For more information, see [MuxConfig](https://help.aliyun.com/document_detail/29253.html). If you do not specify this parameter, media segment files are not generated. This parameter is required if you want to generate media segment files.
   * 
   * @example
   * {"Segment":{"Duration":"10"}}
   */
  muxConfig?: string;
  /**
   * @remarks
   * The name of the transcoding template. The name can be up to 128 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * mps-example
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The general transcoding settings. The value must be a JSON object. For more information, see [TransConfig](https://help.aliyun.com/document_detail/29253.html). If you do not specify this parameter, the default settings are used. This parameter is required if the default settings cannot meet your business requirements.
   * 
   * @example
   * {"TransMode":"onepass"}
   */
  transConfig?: string;
  /**
   * @remarks
   * The video stream settings. The value must be a JSON object. For more information, see [Video](https://help.aliyun.com/document_detail/29253.html).
   * 
   * > If you do not specify this parameter, output files do not contain video streams. This parameter is required if you want to retain the video streams.
   * 
   * @example
   * {"Codec":"H.264","Profile":"high","Bitrate":"500","Crf":"15","Width":"256","Height":"800","Fps":"25","Gop":"10s"}
   */
  video?: string;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      muxConfig: 'MuxConfig',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'string',
      container: 'string',
      muxConfig: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transConfig: 'string',
      video: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

