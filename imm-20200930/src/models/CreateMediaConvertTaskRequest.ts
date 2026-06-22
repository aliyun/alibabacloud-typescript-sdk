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
   * The language of the subtitle. The value must comply with the ISO 639-2 standard.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The subtitle delay, in seconds. The default value is 0.
   * 
   * @example
   * 10.5
   */
  timeOffset?: number;
  /**
   * @remarks
   * The OSS URI of the object. The URI must use the `oss://${Bucket}/${Object}` format, where `${Bucket}` is the name of an OSS bucket in the same region as the project, and `${Object}` is the full path to the object, including its file extension.
   * Supported subtitle formats include: srt, vtt, mov_text, ass, dvd_sub, and pgs.
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
   * The alignment mode for the added audio and video streams. Valid values include:
   * 
   * - false (default): No alignment is performed.
   * 
   * - loop: Aligns content by looping the audio or video.
   * 
   * - pad: Aligns content by padding with silent frames or black frames.
   * 
   * > * This parameter only takes effect if Attached is set to true.
   * 
   * @example
   * false
   */
  alignMode?: string;
  /**
   * @remarks
   * If true, adds the current source media file to the output as a synchronized audio stream or video stream. The default is false.
   * 
   * > - You cannot set Attached to true for the source media file referenced by AlignmentIndex.
   * 
   * @example
   * false
   */
  attached?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the audio from the source media file. Valid values include:
   * 
   * - true: Disables the audio.
   * 
   * - false (default): Includes the audio.
   * 
   * @example
   * false
   */
  disableAudio?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the video from the source media file. Valid values include:
   * 
   * - true: Disables the video.
   * 
   * - false (default): Includes the video.
   * 
   * @example
   * false
   */
  disableVideo?: boolean;
  /**
   * @remarks
   * The duration of media transcoding in seconds. The default value, 0, transcodes the media until its end.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The start time of media transcoding, in seconds. Valid values include:
   * 
   * - 0 (default): Transcoding starts from the beginning of the media file.
   * 
   * - n (a value greater than 0): Transcoding starts n seconds into the media file.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * A list of subtitles to add.
   */
  subtitles?: CreateMediaConvertTaskRequestSourcesSubtitles[];
  /**
   * @remarks
   * The OSS URI of the object. The URI must use the `oss://${Bucket}/${Object}` format, where `${Bucket}` is the name of an OSS bucket in the same region as the project, and `${Object}` is the full path to the object, including its file extension.
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

export class CreateMediaConvertTaskRequestTargetGroupsTargetsSegment extends $dara.Model {
  /**
   * @remarks
   * The duration of each segment, in seconds.
   * 
   * @example
   * 30
   */
  duration?: number;
  /**
   * @remarks
   * The media packaging format. Only `hls` is supported.
   * 
   * @example
   * hls
   */
  format?: string;
  /**
   * @remarks
   * The starting sequence number for segments. The default is 0.
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

export class CreateMediaConvertTaskRequestTargetGroupsTargets extends $dara.Model {
  /**
   * @remarks
   * The audio processing parameters.
   * >Notice: If this parameter is left empty, the first audio stream, if it exists, is copied directly to the output file.
   */
  audio?: TargetAudio;
  /**
   * @remarks
   * The packaging container type. Only `mp4` and `ts` are supported.
   * 
   * @example
   * mp4
   */
  container?: string;
  /**
   * @remarks
   * The media packaging settings.
   */
  segment?: CreateMediaConvertTaskRequestTargetGroupsTargetsSegment;
  /**
   * @remarks
   * The playback speed of the output media. The value must be between 0.5 and 1.0, inclusive. The default value is 1.0.
   * 
   * > This parameter specifies the default playback speed of the output file as a ratio of the source file\\"s speed. It does not perform speed-up transcoding.
   * 
   * @example
   * 1.0
   */
  speed?: number;
  /**
   * @remarks
   * If true, removes metadata from the output file. The default is false.
   */
  stripMetadata?: boolean;
  /**
   * @remarks
   * The subtitle processing parameters.
   * >Notice: You must use the `Subtitle.ExtractSubtitle` parameter to package subtitle streams. The `URI` in `Subtitle.ExtractSubtitle` must be in the same directory as or a subdirectory of `TargetGroups.URI`. The `Format` in `Subtitle.ExtractSubtitle` must be `vtt`. You only need to configure this parameter in one `Target` to package all subtitle streams.
   */
  subtitle?: TargetSubtitle;
  /**
   * @remarks
   * The OSS URI of the output HLS media playlist file for the subtask.
   * >Notice: This URI must be in the same directory as or a subdirectory of `TargetGroups.URI`.
   * 
   * @example
   * oss://test-bucket/test-target-object.mp4
   */
  URI?: string;
  /**
   * @remarks
   * The video processing parameters.
   * >Notice: If this parameter is left empty, the first video stream, if it exists, is copied directly to the output file.
   */
  video?: TargetVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
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
      segment: CreateMediaConvertTaskRequestTargetGroupsTargetsSegment,
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

export class CreateMediaConvertTaskRequestTargetGroups extends $dara.Model {
  /**
   * @remarks
   * A list of media packaging subtasks. Each `Target` corresponds to a variant stream (`#EXT-X-STREAM-INF`) in the HLS master playlist and generates a corresponding HLS media playlist.
   */
  targets?: CreateMediaConvertTaskRequestTargetGroupsTargets[];
  /**
   * @remarks
   * The OSS URI of the output HLS master playlist file for the packaging task.
   * 
   * @example
   * oss://test-bucket/test-object/master.m3u8
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      targets: 'Targets',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targets: { 'type': 'array', 'itemType': CreateMediaConvertTaskRequestTargetGroupsTargets },
      URI: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaConvertTaskRequestTargetsAttachedPicture extends $dara.Model {
  /**
   * @remarks
   * A list of indexes of the attached pictures in the source file to process. An empty list (default) indicates that no attached pictures are retained. An index of -1 indicates that all attached pictures are retained.
   * 
   * - Example: `[0,1]` processes the attached pictures with index 0 and 1; `[1]` processes the attached picture with index 1; `[-1]` processes all attached pictures.
   * 
   * > If a specified index does not correspond to an existing attached picture, it is ignored.
   */
  stream?: number[];
  static names(): { [key: string]: string } {
    return {
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stream: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.stream)) {
      $dara.Model.validateArray(this.stream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaConvertTaskRequestTargetsData extends $dara.Model {
  /**
   * @remarks
   * A list of indexes of the data streams in the source file to process. An empty list (default) indicates that no data streams are retained. An index of -1 indicates that all data streams are retained.
   * 
   * - Example: `[0,1]` processes the data streams with index 0 and 1; `[1]` processes the data stream with index 1; `[-1]` processes all data streams.
   * 
   * > If a specified index does not correspond to an existing data stream, it is ignored.
   */
  stream?: number[];
  static names(): { [key: string]: string } {
    return {
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stream: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.stream)) {
      $dara.Model.validateArray(this.stream);
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
   * The duration of each segment, in seconds.
   * 
   * @example
   * 30
   */
  duration?: number;
  /**
   * @remarks
   * The segmentation method. Valid values include:
   * 
   * - hls
   * 
   * - dash
   * 
   * @example
   * hls
   */
  format?: string;
  /**
   * @remarks
   * The starting sequence number. This parameter is supported only for HLS. The default value is 0.
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
   * Settings for retaining attached pictures.
   * >Notice: Retaining attached pictures is supported only when the `Container` parameter is set to `mp4` or `mkv`.
   */
  attachedPicture?: CreateMediaConvertTaskRequestTargetsAttachedPicture;
  /**
   * @remarks
   * The audio processing parameters.
   * >Notice: If this parameter is left empty, the first audio stream, if it exists, is copied directly to the output file.
   */
  audio?: TargetAudio;
  /**
   * @remarks
   * The media container type. Valid container types include:
   * 
   * - Audio/video containers: mp4, mkv, mov, asf, avi, mxf, ts, flv
   * 
   * - Audio-only containers: mp3, aac, flac, oga, ac3, opus
   * 
   * 
   *   >Notice: 
   * 
   *   The `Container` and `URI` parameters must be set together. To perform only subtitle extraction, frame capture, sprite generation, or animated image generation, leave both `Container` and `URI` empty. In this case, parameters such as `Segment`, `Video`, `Audio`, and `Speed` are ignored.
   * 
   * @example
   * mp4
   */
  container?: string;
  /**
   * @remarks
   * Settings for retaining data streams.
   * >Notice: Retaining data streams is supported only when the `Container` parameter is set to `mp4`.
   */
  data?: CreateMediaConvertTaskRequestTargetsData;
  /**
   * @remarks
   * The parameters for frame capture, sprite generation, and animated image generation.
   */
  image?: TargetImage;
  /**
   * @remarks
   * Settings for media segmentation.
   */
  segment?: CreateMediaConvertTaskRequestTargetsSegment;
  /**
   * @remarks
   * The playback speed of the output media. The value must be between 0.5 and 1.0, inclusive. The default value is 1.0.
   * 
   * > This parameter specifies the default playback speed of the output file as a ratio of the source file\\"s speed. It does not perform speed-up transcoding.
   * 
   * @example
   * 1.0
   */
  speed?: number;
  /**
   * @remarks
   * If true, removes metadata such as `title` and `album` from the media file. The default is false.
   */
  stripMetadata?: boolean;
  /**
   * @remarks
   * The subtitle processing parameters.
   * >Notice: If this parameter is left empty, the first subtitle stream, if it exists, is copied directly to the output file.
   */
  subtitle?: TargetSubtitle;
  /**
   * @remarks
   * The OSS URI of the output file for media transcoding.
   * 
   * The URI must be in the `oss://${Bucket}/${Object}` format. In this format, `${Bucket}` is the name of the OSS bucket, which must be in the same region as the project, and `${Object}` is the full path to the object, including the file extension.
   * 
   * - If the **URI** has a file extension, all output media files are saved to this **URI**. If multiple files are generated, they will overwrite each other.
   * 
   * - If the **URI** does not have a file extension, the final output URI is generated based on the **URI**, **Container**, and **Segment** parameters. For example, if the **URI** is `oss://examplebucket/outputVideo`:
   * 
   *   - If **Container** is `mp4` and **Segment** is empty, the OSS URI of the generated media file is `oss://examplebucket/outputVideo.mp4`.
   * 
   *   - If **Container** is `ts` and **Format** in **Segment** is `hls`, the process generates an m3u8 file with the OSS URI `oss://examplebucket/outputVideo.m3u8` and multiple TS files prefixed with `oss://examplebucket/outputVideo`.
   * 
   * @example
   * oss://test-bucket/test-target-object.mp4
   */
  URI?: string;
  /**
   * @remarks
   * The video processing parameters.
   * >Notice: If this parameter is left empty, the first video stream, if it exists, is copied directly to the output file.
   */
  video?: TargetVideo;
  static names(): { [key: string]: string } {
    return {
      attachedPicture: 'AttachedPicture',
      audio: 'Audio',
      container: 'Container',
      data: 'Data',
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
      attachedPicture: CreateMediaConvertTaskRequestTargetsAttachedPicture,
      audio: TargetAudio,
      container: 'string',
      data: CreateMediaConvertTaskRequestTargetsData,
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
    if(this.attachedPicture && typeof (this.attachedPicture as any).validate === 'function') {
      (this.attachedPicture as any).validate();
    }
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
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
   * When concatenating media files, this specifies the index of the primary file in the Sources list. The default transcoding parameters (such as resolution and frame rate from the `Video` and `Audio` objects) are taken from this primary file. The default index is 0.
   * 
   * @example
   * 0
   */
  alignmentIndex?: number;
  /**
   * @remarks
   * **You can leave this parameter empty if you do not have special requirements.**
   * 
   * The chained authorization configuration. For more information, see [Use chained authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The message notification settings. For more information, click Notification. For information about the format of asynchronous notifications, see [Asynchronous notification format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * The name of the project. For more information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * A list of media files. If you provide more than one file, they are concatenated in the order of their URIs.
   * 
   * This parameter is required.
   */
  sources?: CreateMediaConvertTaskRequestSources[];
  /**
   * @remarks
   * Custom tags for searching and filtering asynchronous tasks.
   * 
   * @example
   * {"test":"val1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * A list of media packaging tasks to convert and package the input media into HLS outputs. Each TargetGroup corresponds to one HLS master playlist.
   */
  targetGroups?: CreateMediaConvertTaskRequestTargetGroups[];
  /**
   * @remarks
   * A list of media processing tasks.
   */
  targets?: CreateMediaConvertTaskRequestTargets[];
  /**
   * @remarks
   * The custom user data. This data is returned in the asynchronous notification, allowing you to associate the notification with your internal system. The maximum length is 2,048 bytes.
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
      targetGroups: 'TargetGroups',
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
      targetGroups: { 'type': 'array', 'itemType': CreateMediaConvertTaskRequestTargetGroups },
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
    if(Array.isArray(this.targetGroups)) {
      $dara.Model.validateArray(this.targetGroups);
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

