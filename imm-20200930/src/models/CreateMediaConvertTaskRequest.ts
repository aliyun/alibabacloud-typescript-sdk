// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";
import { TargetAudio } from "./TargetAudio";
import { TargetImage } from "./TargetImage";
import { TargetSubtitle } from "./TargetSubtitle";
import { TargetVideo } from "./TargetVideo";


export class CreateMediaConvertTaskRequestSourcesSubtitles extends $dara.Model {
  /**
   * @remarks
   * The subtitle language. If you specify this parameter, comply with the ISO 639-2 standard. This parameter is left empty by default.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The time offset of the subtitle. Unit: seconds. Default value: 0.
   * 
   * @example
   * 10.5
   */
  timeOffset?: number;
  /**
   * @remarks
   * The URI of the Object Storage Service (OSS) bucket. Specify the value in the `oss://${Bucket}/${Object}` format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region with the current project. `${Object}` specifies the complete path to the file whose name contains an extension. The following subtitle formats are supported: srt, vtt, mov_text, ass, dvd_sub, and pgs.
   * 
   * @example
   * oss://test-bucket/subtitles
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      timeOffset: 'TimeOffset',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      timeOffset: 'number',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaConvertTaskRequestSources extends $dara.Model {
  alignMode?: string;
  attached?: boolean;
  disableAudio?: boolean;
  disableVideo?: boolean;
  /**
   * @remarks
   * The transcoding duration of the media. Unit: seconds. Default value: 0. A value of 0 specifies that the transcoding duration lasts until the end of the video.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The start time of the media transcoding task. Unit: seconds. Valid values:
   * 
   * *   0 (default): starts transcoding when the media starts playing.
   * *   n: starts transcoding n seconds after the media starts playing. n must be greater than 0.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The subtitles. By default, this parameter is left empty.
   */
  subtitles?: CreateMediaConvertTaskRequestSourcesSubtitles[];
  /**
   * @remarks
   * The URI of the Object Storage Service (OSS) bucket. Specify the value in the `oss://${Bucket}/${Object}` format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region with the current project. `${Object}` specifies the complete path to the file whose name contains an extension.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      alignMode: 'AlignMode',
      attached: 'Attached',
      disableAudio: 'DisableAudio',
      disableVideo: 'DisableVideo',
      duration: 'Duration',
      startTime: 'StartTime',
      subtitles: 'Subtitles',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignMode: 'string',
      attached: 'boolean',
      disableAudio: 'boolean',
      disableVideo: 'boolean',
      duration: 'number',
      startTime: 'number',
      subtitles: { 'type': 'array', 'itemType': CreateMediaConvertTaskRequestSourcesSubtitles },
      URI: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subtitles)) {
      $dara.Model.validateArray(this.subtitles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaConvertTaskRequestTargetsSegment extends $dara.Model {
  /**
   * @remarks
   * The duration of the segment. Unit: seconds.
   * 
   * @example
   * 30
   */
  duration?: number;
  /**
   * @remarks
   * The media segmentation mode. Valid values:
   * 
   * *   hls
   * *   dash
   * 
   * @example
   * hls
   */
  format?: string;
  /**
   * @remarks
   * The start sequence number. You can specify this parameter only if you set Format to hls. Default value: 0.
   * 
   * @example
   * 5
   */
  startNumber?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      format: 'Format',
      startNumber: 'StartNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      format: 'string',
      startNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CreateMediaConvertTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the main media file in the concatenation list of media files. The main media file provides the default transcoding settings, such as the resolution and the frame rate, for videos and audios. Default value: `0`. A value of `0` specifies that the main media file is aligned with the first media file in the concatenation list.
   */
  alignmentIndex?: number;
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The authorization chain. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The notification settings. For more information, see "Notification". For information about the asynchronous notification format, see [Asynchronous notification format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The source media files. If multiple files exist at the same time, the Concat feature is enabled. The video files are concatenated in the order of their URI inputs.
   * 
   * This parameter is required.
   */
  sources?: CreateMediaConvertTaskRequestSources[];
  /**
   * @remarks
   * The custom tags. You can search for or filter asynchronous tasks by custom tag.
   * 
   * @example
   * {"test":"val1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The media processing tasks. You can specify multiple values for this parameter.
   * 
   * This parameter is required.
   */
  targets?: CreateMediaConvertTaskRequestTargets[];
  /**
   * @remarks
   * The custom information, which is returned as asynchronous notifications to facilitate notification management in your system. The maximum information length is 2,048 bytes.
   * 
   * @example
   * {"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      alignmentIndex: 'AlignmentIndex',
      credentialConfig: 'CredentialConfig',
      notification: 'Notification',
      projectName: 'ProjectName',
      sources: 'Sources',
      tags: 'Tags',
      targets: 'Targets',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignmentIndex: 'number',
      credentialConfig: CredentialConfig,
      notification: Notification,
      projectName: 'string',
      sources: { 'type': 'array', 'itemType': CreateMediaConvertTaskRequestSources },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: { 'type': 'array', 'itemType': CreateMediaConvertTaskRequestTargets },
      userData: 'string',
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

