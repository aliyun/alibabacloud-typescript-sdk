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
   * The language of the subtitle, referenced by ISO 639-2, with a default value of empty.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The subtitle delay time, in seconds, with a default value of 0.
   * 
   * @example
   * 10.5
   */
  timeOffset?: number;
  /**
   * @remarks
   * The OSS address rule is `oss://${Bucket}/${Object}`, where `${Bucket}` is the name of the OSS Bucket in the same region (Region) as the current project, and `${Object}` is the complete path of the file including the file extension.
   * Supported subtitle formats include: srt, vtt, mov_text, ass, dvd_sub, pgs.
   * 
   * @example
   * oss://test-bucket/test-object
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
  /**
   * @remarks
   * The alignment strategy for adding audio and video streams, with the following value range:
   * - false (default): No alignment.
   * - loop: Loop the audio and video content to align.
   * - pad: Align by padding silent frames and black video frames.
   * > - Only valid when the Attached parameter is true.
   * 
   * @example
   * false
   */
  alignMode?: string;
  /**
   * @remarks
   * Add the current source media file as a synchronized audio or video stream to the output media file, with a default value of false.
   * 
   * > - The AlignmentIndex parameter pointing to the Attached parameter of the Source cannot be true.
   * 
   * @example
   * false
   */
  attached?: boolean;
  /**
   * @remarks
   * Whether to disable the audio in the source media file. The value range is as follows:
   * 
   * - true: Disable.
   * - false (default): Do not disable.
   * 
   * @example
   * false
   */
  disableAudio?: boolean;
  /**
   * @remarks
   * Whether to disable the video in the source media file. The value range is as follows:
   * 
   * - true: Disable.
   * - false (default): Do not disable.
   * 
   * @example
   * false
   */
  disableVideo?: boolean;
  /**
   * @remarks
   * The duration of media transcoding, in seconds. The default value is 0, indicating until the end of the video.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The start time for media transcoding, in seconds. The value range is as follows:
   * - 0 (default): Start transcoding from the beginning of the media.
   * - n (greater than 0): Start transcoding n seconds after the beginning of the media.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * A list of subtitles to add, which is empty by default.
   */
  subtitles?: CreateMediaConvertTaskRequestSourcesSubtitles[];
  /**
   * @remarks
   * The OSS address rule is `oss://${Bucket}/${Object}`, where `${Bucket}` is the name of the OSS Bucket in the same region (Region) as the current project, and `${Object}` is the complete path of the file including the file extension.
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
   * Segment length. Unit: seconds.
   * 
   * @example
   * 30
   */
  duration?: number;
  /**
   * @remarks
   * Media slicing method. The value range is as follows:
   * - hls
   * - dash
   * 
   * @example
   * hls
   */
  format?: string;
  /**
   * @remarks
   * Starting sequence number, supported only for hls, default is 0.
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
   * Audio processing parameter configuration.
   * >Notice: If Audio is null, the first audio stream (if present) will be directly copied to the output file.</notice>
   */
  audio?: TargetAudio;
  /**
   * @remarks
   * Media container type. Available container types are as follows:
   * - Audio and video containers: mp4, mkv, mov, asf, avi, mxf, ts, flv
   * - Audio containers: mp3, aac, flac, oga, ac3, opus
   * >Notice: Both Container and URI parameters need to be set. If only subtitle extraction, frame capture, sprite image capture, or media-to-gif conversion is performed, both Container and URI should be set to null, making the Segment, Video, Audio, and Speed parameters meaningless.</notice>
   * 
   * @example
   * mp4
   */
  container?: string;
  /**
   * @remarks
   * Configuration for frame capture, sprite image capture, and media to animated image conversion.
   */
  image?: TargetImage;
  /**
   * @remarks
   * Media segment settings, no segmentation by default.
   */
  segment?: CreateMediaConvertTaskRequestTargetsSegment;
  /**
   * @remarks
   * Media playback speed setting, with a value range of [0.5,1.0], default is 1.0.
   * > The ratio of the playback speed of the transcoded media file to the original media file, not a speed-up transcoding.
   * 
   * @example
   * 1.0
   */
  speed?: number;
  /**
   * @remarks
   * Removes metadata from the media file, such as `title`, `album`, etc. The default value is false.
   */
  stripMetadata?: boolean;
  /**
   * @remarks
   * Subtitle processing parameter configuration.
   * >Notice: If Subtitle is null, the first subtitle stream (if present) will be directly copied to the output file.</notice>
   */
  subtitle?: TargetSubtitle;
  /**
   * @remarks
   * OSS address for the output file of media transcoding.
   * 
   * The OSS address rule is `oss://${Bucket}/${Object}`, where `${Bucket}` is the name of the OSS Bucket in the same region (Region) as the current project, and `${Object}` is the complete path of the file including the file extension.
   * - When **URI** has an extension, the OSS address for the transcoded media file will be **URI**. If there are multiple output files, they may overwrite each other.
   * - When **URI** does not have an extension, the OSS address for the transcoded media file is determined by the **URI**, **Container**, and **Segment** parameters. For example, if **URI** is `oss://examplebucket/outputVideo`:
   *    -  When **Container** is `mp4` and **Segment** is empty, the generated media file\\"s OSS address will be `oss://examplebucket/outputVideo.mp4`.
   *    -  When **Container** is `ts` and **Segment**\\"s **Format** is `hls`, it will generate an m3u8 file with the OSS address `oss://examplebucket/outputVideo.m3u8` and multiple ts files with the prefix `oss://examplebucket/outputVideo`.
   * 
   * @example
   * oss://test-bucket/test-target-object.mp4
   */
  URI?: string;
  /**
   * @remarks
   * Video processing parameter configuration.
   * >Notice: If Video is null, the first video stream (if present) will be directly copied to the output file.</notice>
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
   * When performing media concatenation, the index of the primary media file (which provides the default transcoding parameters for `Video` and `Audio`, including resolution, frame rate, etc.) in the concatenation list. The default value is 0 (aligning with the first media file in the concatenation list).
   * 
   * @example
   * 0
   */
  alignmentIndex?: number;
  /**
   * @remarks
   * **If there are no special requirements, please leave this blank.**
   * 
   * Chain authorization configuration. For more information, see [Using Chain Authorization to Access Other Entity Resources](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * Notification configuration. For details, click Notification. The format of asynchronous notification messages can be found in [Asynchronous Notification Message Format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * The name of the project. For how to obtain it, see [Creating a Project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * A list of media files. If the list contains more than one element, it indicates that the Concat (concatenation) function is enabled. The Concat order follows the sequence of the input video file URIs.
   * 
   * This parameter is required.
   */
  sources?: CreateMediaConvertTaskRequestSources[];
  /**
   * @remarks
   * Custom tags used for searching and filtering asynchronous tasks.
   * 
   * @example
   * {"test":"val1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * List of media processing tasks, supporting multiple task configurations.
   * 
   * This parameter is required.
   */
  targets?: CreateMediaConvertTaskRequestTargets[];
  /**
   * @remarks
   * User-defined information that will be returned in asynchronous message notifications, used for convenient association and processing within your system. The maximum length is 2048 bytes.
   * 
   * @example
   * {"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}
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

