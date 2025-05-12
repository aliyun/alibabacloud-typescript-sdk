// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations. The value is a JSON object. For more information, see the [MuxConfig](https://help.aliyun.com/document_detail/29253.html) parameter of the "Parameter details" topic.
   * 
   * @example
   * {"Codec":"aac","Samplerate":"44100","Bitrate":"500","Channels":"2"}
   */
  audio?: string;
  /**
   * @remarks
   * The configurations of the video stream. The value is a JSON object. For more information, see the [Video](https://help.aliyun.com/document_detail/29253.html) parameter of the "Parameter details" topic.
   * 
   * @example
   * {"Format":"mp4"}
   */
  container?: string;
  /**
   * @remarks
   * The general transcoding configurations. The value is a JSON object. For more information, see the [TransConfig](https://help.aliyun.com/document_detail/29253.html) parameter of the "Parameter details" topic.
   * 
   * @example
   * {"Segment":{"Duration":"10"}}
   */
  muxConfig?: string;
  /**
   * @remarks
   * The container format. The value is a JSON object. Default format: **MP4**.
   * 
   * *   Video formats: FLV, MP4, HLS (M3U8 + TS), and MPEG-DASH (MPD + fMP4)
   * *   Audio formats: MP3, MP4, OGG, FLAC, and M4A
   * *   Images formats: GIF and WebP
   * 
   * For more information, see the [Container](https://help.aliyun.com/document_detail/29253.html) parameter of the "Parameter details" topic.
   * 
   * This parameter is required.
   * 
   * @example
   * MPS-example
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the template. The name can be up to 128 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * {"TransMode":"onepass"}
   */
  transConfig?: string;
  /**
   * @remarks
   * The configurations of the audio stream. The value is a JSON object. For more information, see the [Audio](https://help.aliyun.com/document_detail/29253.html) parameter of the "Parameter details" topic.
   * 
   * @example
   * {"Codec":"H.264","Profile":"high","Bitrate":"500","Crf":"15","Width":"256","Height":"800","Fps":"25","Gop":"10"}
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
      templateId: 'TemplateId',
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
      templateId: 'string',
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

