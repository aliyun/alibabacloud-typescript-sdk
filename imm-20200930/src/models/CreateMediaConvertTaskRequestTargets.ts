// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TargetAudio } from "./TargetAudio";
import { TargetImage } from "./TargetImage";
import { CreateMediaConvertTaskRequestTargetsSegment } from "./CreateMediaConvertTaskRequestTargetsSegment";
import { TargetSubtitle } from "./TargetSubtitle";
import { TargetVideo } from "./TargetVideo";


export class CreateMediaConvertTaskRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The audio processing settings.
   * 
   * >  If you leave Audio empty and the first audio stream exists, the first audio stream is directly copied to the output file.
   */
  audio?: TargetAudio;
  /**
   * @remarks
   * The type of the media container.
   * 
   * *   Valid values for audio and video containers: mp4, mkv, mov, asf, avi, mxf, ts, and flv.
   * 
   * *   Valid values only for audio containers: mp3, aac, flac, oga, ac3, and opus.
   * 
   *     **
   * 
   *     **Note** Specify Container and URI at the same time. If you want to extract subtitles, capture frames, capture image sprites, or rotate media images, set Container and URI to null. In this case, Segment, Video, Audio, and Speed do not take effect.
   * 
   * @example
   * mp4
   */
  container?: string;
  /**
   * @remarks
   * The frame capturing, sprite capturing, and media rotation settings.
   */
  image?: TargetImage;
  /**
   * @remarks
   * The media segmentation settings. By default, no segmentation is performed.
   */
  segment?: CreateMediaConvertTaskRequestTargetsSegment;
  /**
   * @remarks
   * The playback speed of the media. Valid values: 0.5 to 2. Default value: 1.0.
   * 
   * >  This parameter specifies the ratio of the non-regular playback speed of the transcoded media file to the default playback speed of the source media file.
   * 
   * @example
   * 1.0
   */
  speed?: number;
  /**
   * @remarks
   * Specifies whether to remove the metadata, such as `title` and `album`, from the media file. Default value: false.
   */
  stripMetadata?: boolean;
  /**
   * @remarks
   * The subtitle processing settings.
   * 
   * >  If you leave Subtitle empty and the first subtitle stream exists, the first subtitle stream is directly copied to the output file.
   */
  subtitle?: TargetSubtitle;
  /**
   * @remarks
   * The URI of the OSS bucket in which you want to store the media transcoding output file.
   * 
   * Specify the value in the `oss://${Bucket}/${Object}` format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region with the current project. `${Object}` specifies the complete path to the file whose name contains an extension.
   * 
   * *   If the value of **URI** contains an extension, the endpoint of the OSS bucket matches the URI. If multiple media transcoding output files exist, the endpoints of the correspodning OSS buckets may be overwritten.****
   * 
   * *   If the value of **URI** does not contain an extension, the endpoint of the OSS bucket consists of the following parameters: **URI**, **Container**, and **Segment**. In the following examples, the value of **URI** is `oss://examplebucket/outputVideo`.
   * 
   *     *   If the value of **Container** is `mp4` and the value of **Segment** is null, the endpoint of the OSS bucket is `oss://examplebucket/outputVideo.mp4`.
   *     *   If the value of **Container** is `ts` and the value of **Format** in **Segment** is `hls`, the endpoint of the OSS bucket is `oss://examplebucket/outputVideo.m3u8`. In addition, multiple ts files prefixed with `oss://examplebucket/outputVideo` are generated.
   * 
   * @example
   * oss://test-bucket/targets
   */
  URI?: string;
  /**
   * @remarks
   * The video processing settings.
   * 
   * >  If you leave Video empty and the first video stream exists, the first video stream is directly copied to the output file.
   */
  video?: TargetVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      image: 'Image',
      segment: 'Segment',
      speed: 'Speed',
      stripMetadata: 'StripMetadata',
      subtitle: 'Subtitle',
      URI: 'URI',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: TargetAudio,
      container: 'string',
      image: TargetImage,
      segment: CreateMediaConvertTaskRequestTargetsSegment,
      speed: 'number',
      stripMetadata: 'boolean',
      subtitle: TargetSubtitle,
      URI: 'string',
      video: TargetVideo,
    };
  }

  validate() {
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    if(this.segment && typeof (this.segment as any).validate === 'function') {
      (this.segment as any).validate();
    }
    if(this.subtitle && typeof (this.subtitle as any).validate === 'function') {
      (this.subtitle as any).validate();
    }
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

