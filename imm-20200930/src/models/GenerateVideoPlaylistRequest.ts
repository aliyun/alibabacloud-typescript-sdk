// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";
import { TargetAudio } from "./TargetAudio";
import { TargetSubtitle } from "./TargetSubtitle";
import { TargetVideo } from "./TargetVideo";


export class GenerateVideoPlaylistRequestSourceSubtitles extends $dara.Model {
  /**
   * @remarks
   * The subtitle language. If you configure this parameter, the value must comply with the ISO 639-2 standard. By default, this parameter is left empty.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The OSS path of the subtitle file.
   * 
   * The OSS path must be in the oss://${Bucket}/${Object} format. ${Bucket} specifies the name of the OSS bucket that is in the same region as the current project. ${Object} specifies the full path of the file.
   * 
   * >  The **MasterURI** parameter cannot be left empty, and the OSS path `oss://${Bucket}/${Object}` of a subtitle file must be in the directory specified by the **MasterURI** parameter or its subdirectory.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object/subtitle/eng.vtt
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
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

export class GenerateVideoPlaylistRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The audio processing configuration. If you set this parameter to null (default), audio processing is disabled. The generated TS files do not contain audio streams.
   * 
   * >  The Audio and Subtitle parameters in the same output are mutually exclusive. If the Audio parameter is configured, the Subtitle parameter is ignored. The Audio and Video parameters can be configured at the same time. You can also configure only the Audio parameter to generate only audio information.
   */
  audio?: TargetAudio;
  /**
   * @remarks
   * The playback duration of a single TS file. Unit: seconds. Default value: 10. Valid values: 5 to 15.
   * 
   * @example
   * 5
   */
  duration?: number;
  /**
   * @remarks
   * The array of the durations of the pre-transcoded TS files. The array can contain the durations of up to six pre-transcoded TS files. By default, this parameter is left empty. This parameter is independent of the **Duration** parameter.
   */
  initialSegments?: number[];
  /**
   * @remarks
   * The pre-transcoding duration. Unit: seconds. Default value: 30.
   * 
   * *   If you set this parameter to 0, pre-transcoding is disabled.
   * *   If you set this parameter to a value that is less than 0 or greater than the duration of a source video, the entire video is pre-transcoded.
   * *   If you set this parameter to a value that is within the middle of the playback duration of a TS file, the transcoding continues until the end of the playback duration.
   * 
   * >  This parameter is used to reduce the time spent in waiting for the initial playback of a video and improve the playback experience. If you want to replace the traditional video on demand (VOD) business scenario, you can try to pre-transcode the entire video.
   * 
   * @example
   * 30.0
   */
  initialTranscode?: number;
  /**
   * @remarks
   * The subtitle processing configuration.
   * 
   * >  The Subtitle and Video or Audio parameters in the same output are mutually exclusive. You must configure the Subtitle parameter independently to generate subtitles.
   */
  subtitle?: TargetSubtitle;
  /**
   * @remarks
   * The [tags](https://help.aliyun.com/document_detail/106678.html) that you want to add to a TS file in OSS. You can use tags to manage the lifecycles of TS files in OSS.
   * 
   * >  The combination of the value of the Tags parameter and the value of the Tags parameter in the upper level is used as the tag value of the current output. If the value of the Tags parameter in the current level is the same as the value of the Tags parameter in the upper level, use the value of the Tags parameter in the current level.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The number of TS files that are pre-transcoded when the live transcoding is triggered. By default, a 2-minute video is pre-transcoded.
   * 
   * *   Example: If you set the **Duration** parameter to 10, the value of the **TranscodeAhead** parameter is 12 by default. You can configure this parameter to manage the number of pre-transcoded files in an asynchronous manner. Valid values: 10 to 30.
   * 
   * @example
   * 3
   */
  transcodeAhead?: number;
  /**
   * @remarks
   * The prefix of the OSS path that is used to store the live transcoding files. The live transcoding files include a M3U8 file and multiple TS files.
   * 
   * The OSS path must be in the oss://${Bucket}/${Object} format. ${Bucket} specifies the name of the OSS bucket that is in the same region as the current project. ${Object} specifies the prefix of the full path of the file that does not contain the file name extension.
   * 
   * *   Example: If the URI is oss://test-bucket/test-object/output-video, the output-video.m3u8 file and multiple output-video-${token}-${index}.ts files are generated in the oss://test-bucket/test-object/ directory. ${token} is a unique string generated based on the transcoding parameters. The ${token} parameter is included in the response of the operation. ${index} is the serial number of the generated TS files that are numbered starting from 0.
   * 
   * >  If the **MasterURI** parameter is not left empty, the URI specified by this parameter must be in the directory specified by the **MasterURI** parameter or its subdirectory.
   * 
   * @example
   * oss://imm-test/testcases/video
   */
  URI?: string;
  /**
   * @remarks
   * The video processing configuration. If you set this parameter to null (default), video processing is disabled. The generated TS files do not contain video streams.
   * 
   * >  The Video and Subtitle parameters in the same output are mutually exclusive. If the Video parameter is configured, the Subtitle parameter is ignored.
   */
  video?: TargetVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      duration: 'Duration',
      initialSegments: 'InitialSegments',
      initialTranscode: 'InitialTranscode',
      subtitle: 'Subtitle',
      tags: 'Tags',
      transcodeAhead: 'TranscodeAhead',
      URI: 'URI',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: TargetAudio,
      duration: 'number',
      initialSegments: { 'type': 'array', 'itemType': 'number' },
      initialTranscode: 'number',
      subtitle: TargetSubtitle,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      transcodeAhead: 'number',
      URI: 'string',
      video: TargetVideo,
    };
  }

  validate() {
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(Array.isArray(this.initialSegments)) {
      $dara.Model.validateArray(this.initialSegments);
    }
    if(this.subtitle && typeof (this.subtitle as any).validate === 'function') {
      (this.subtitle as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
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

export class GenerateVideoPlaylistRequest extends $dara.Model {
  /**
   * @remarks
   * **If you do not have special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The OSS path of the master playlist.
   * 
   * The OSS path must be in the oss://${Bucket}/${Object} format. ${Bucket} specifies the name of the OSS bucket that is in the same region as the current project. ${Object} specifies the full path of the file that is suffixed with .m3u8.
   * 
   * >  If a playlist contains subtitles or multiple outputs, the MasterURI parameter is required and the URI of subtitle files or outputs must be in the directory specified by the MasterURI parameter or its subdirectory.
   * 
   * @example
   * oss://bucket/object/master.m3u8
   */
  masterURI?: string;
  /**
   * @remarks
   * The notification settings. To view details, click Notification. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * The overwrite policy when the media playlist exists. Valid values:
   * 
   * *   overwrite (default): overwrites an existing media playlist.
   * *   skip-existing: skips generation and retains the existing media playlist.
   * 
   * @example
   * overwrite
   */
  overwritePolicy?: string;
  /**
   * @remarks
   * The project name.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The period of time during which the playlist is generated. Unit: seconds.
   * 
   * *   If you set this parameter to 0 (default) or leave this parameter empty, a playlist is generated until the end time of the source video.
   * *   If you set this parameter to a value greater than 0, a playlist is generated for the specified period of time from the start time that you specify.
   * 
   * >  If you set this parameter to a value that exceeds the end time of a source video, use the default value.
   * 
   * @example
   * 0
   */
  sourceDuration?: number;
  /**
   * @remarks
   * The time when the playlist starts to generate. Unit: seconds.
   * 
   * *   If you set this parameter to 0 (default) or leave this parameter empty, the start time of the source video is used as the time when a playlist starts to generate.
   * *   If you set this parameter to a value greater than 0, the time when a playlist starts to generate is the specified point in time.
   * 
   * >  If you use this parameter together with the **SourceDuration** parameter, a playlist can be generated based on the partial content of a source video.
   * 
   * @example
   * 0
   */
  sourceStartTime?: number;
  /**
   * @remarks
   * The subtitle files. By default, this parameter is left empty. Up to two subtitle files are supported.
   */
  sourceSubtitles?: GenerateVideoPlaylistRequestSourceSubtitles[];
  /**
   * @remarks
   * The OSS path of the video file.
   * 
   * The OSS path must be in the oss://${Bucket}/${Object} format. ${Bucket} specifies the name of the OSS bucket that is in the same region as the current project. ${Object} specifies the full path of the file that contains the file name extension.
   * 
   * >  Only OSS buckets of the Standard storage class are supported. OSS buckets for which hotlink protection whitelists are configured are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://imm-test/testcases/video.mp4
   */
  sourceURI?: string;
  /**
   * @remarks
   * The [tags](https://help.aliyun.com/document_detail/106678.html) that you want to add to a TS file in OSS. You can use tags to manage the lifecycles of TS files in OSS.
   * 
   * @example
   * {"key1": "value1", "key2": "value2"}
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The live transcoding playlists. Up to 6 playlists are supported. Each output corresponds to at most one video media playlist and one or more subtitle media playlists.
   * 
   * >  If more than one output is configured, the **MasterURI** parameter is required.
   * 
   * This parameter is required.
   */
  targets?: GenerateVideoPlaylistRequestTargets[];
  /**
   * @remarks
   * The custom user information, which is returned in asynchronous notifications to help you handle the notifications in the system. The maximum length of a notification is 2048 bytes.
   * 
   * @example
   * {"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      masterURI: 'MasterURI',
      notification: 'Notification',
      overwritePolicy: 'OverwritePolicy',
      projectName: 'ProjectName',
      sourceDuration: 'SourceDuration',
      sourceStartTime: 'SourceStartTime',
      sourceSubtitles: 'SourceSubtitles',
      sourceURI: 'SourceURI',
      tags: 'Tags',
      targets: 'Targets',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      masterURI: 'string',
      notification: Notification,
      overwritePolicy: 'string',
      projectName: 'string',
      sourceDuration: 'number',
      sourceStartTime: 'number',
      sourceSubtitles: { 'type': 'array', 'itemType': GenerateVideoPlaylistRequestSourceSubtitles },
      sourceURI: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      targets: { 'type': 'array', 'itemType': GenerateVideoPlaylistRequestTargets },
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
    if(Array.isArray(this.sourceSubtitles)) {
      $dara.Model.validateArray(this.sourceSubtitles);
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

