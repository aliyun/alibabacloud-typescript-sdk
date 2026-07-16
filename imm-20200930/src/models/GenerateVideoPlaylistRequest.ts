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
   * The subtitle language. The value follows the ISO 639-2 standard. This parameter is empty by default.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The OSS URI of the subtitle to embed.
   * 
   * The OSS URI follows the format oss://${Bucket}/${Object}, where ${Bucket} is the name of the OSS bucket in the same region as the current project, and ${Object} is the full path of the file.
   * > The **MasterURI** parameter must not be empty, and the OSS URI `oss://${Bucket}/${Object}` of the subtitle must be in the same directory as or a subdirectory of the **MasterURI** parameter.
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
   * The audio processing parameter settings. An empty value (default) indicates that audio processing is disabled and the output TS files do not contain audio streams.
   * > The Audio and Subtitle fields within the same Target are mutually exclusive. If the Audio field is set, the Subtitle field is ignored. Audio and Video can be set simultaneously. Audio specifies the audio information in the output video. You can also set only Audio to generate audio-only output.
   */
  audio?: TargetAudio;
  container?: string;
  /**
   * @remarks
   * The playback duration of a single TS file. Unit: seconds. Default value: 10. Valid values: [5, 15].
   * 
   * @example
   * 10
   */
  duration?: number;
  /**
   * @remarks
   * The array of initial transcoding TS file durations. The maximum array length is 6. This parameter is empty by default and is independent of the **Duration** parameter.
   */
  initialSegments?: number[];
  /**
   * @remarks
   * The initial transcoding duration. Unit: seconds. Default value: 30.
   * 
   * - If the value is set to 0, no pre-transcoding is performed.
   * - If the value is less than 0 or exceeds the source video length, the entire video is initially transcoded.
   * - If the specified duration falls in the middle of a TS file, transcoding continues until the end of that TS file.
   * 
   * > This parameter is primarily used to reduce the wait time for initial video playback and improve the playback experience. If you want to replace traditional VOD business scenarios, try initially transcoding the entire video.
   * 
   * @example
   * 30
   */
  initialTranscode?: number;
  /**
   * @remarks
   * The subtitle processing parameter settings.
   * > The Subtitle field is mutually exclusive with the Video or Audio fields within the same Target. Subtitles are generated only when Subtitle is set independently.
   */
  subtitle?: TargetSubtitle;
  /**
   * @remarks
   * The OSS object [tags](https://help.aliyun.com/document_detail/106678.html) to add to the generated TS files. You can use OSS tags to control the lifecycle of OSS files.
   * > The tag values at this level are merged with the Tags defined at the parent level to form the tag values for the current Target. If a tag with the same name exists, the value at this level takes precedence.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The number of TS files to transcode ahead when just-in-time transcoding is triggered. By default, 2 minutes of video is transcoded ahead.
   * 
   * - Example: If **Duration** is 10, the default value of **TranscodeAhead** is 12. You can specify this parameter to control the number of asynchronous ahead-of-time transcoding files. Valid values: [10, 30].
   * 
   * @example
   * 12
   */
  transcodeAhead?: number;
  /**
   * @remarks
   * The OSS URI prefix of the just-in-time transcoding output files, including M3U8 files and TS files.
   * 
   * The OSS URI follows the format oss://${Bucket}/${Object}, where ${Bucket} is the name of the OSS bucket in the same region as the current project, and ${Object} is the full path prefix of the file without the file name extension.
   * 
   * - Example: If URI is oss://test-bucket/test-object/output-video, an oss://test-bucket/test-object/output-video.m3u8 file and multiple oss://test-bucket/test-object/output-video-${token}-${index}.ts files are generated. ${token} is a unique string generated based on the transcoding parameters and is included in the API response. ${index} is the sequence number of the TS file starting from 0.
   * 
   * > If the **MasterURI** parameter is not empty, the URI must be in the same directory as or a subdirectory of the **MasterURI** parameter.
   * 
   * @example
   * oss://test-bucket/test-object/output-video
   */
  URI?: string;
  /**
   * @remarks
   * The video processing parameter settings. An empty value (default) indicates that video processing is disabled and the output TS files do not contain video streams.
   * > The Video and Subtitle fields within the same Target are mutually exclusive. If the Video field is set, the Subtitle field is ignored.
   */
  video?: TargetVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
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
      container: 'string',
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
   * **Leave this parameter empty unless you have specific requirements.**
   * 
   * The China authorization configuration. This parameter is optional. For more information, see [Use Chinese authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The OSS URI of the Master Playlist.
   * 
   * The OSS URI follows the format oss://${Bucket}/${Object}, where ${Bucket} is the name of the OSS bucket in the same region as the current project, and ${Object} is the full path of the file with the ".m3u8" extension.
   * > If the playlist has subtitle input or multiple Target outputs, MasterURI is required. The subtitle URI or Target URI must be in the same directory as or a subdirectory of MasterURI.
   * 
   * @example
   * oss://test-bucket/test-object/master.m3u8
   */
  masterURI?: string;
  /**
   * @remarks
   * The message notification configuration. Click Notification for details. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * The overwrite policy when a Media Playlist already exists. Valid values:
   * 
   * - overwrite (default): overwrites the existing Media Playlist.
   * - skip-existing: skips generation and retains the existing Media Playlist.
   * 
   * @example
   * overwrite
   */
  overwritePolicy?: string;
  /**
   * @remarks
   * The project name. For information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The duration for generating the playlist. Unit: seconds. Valid values:
   * 
   * - 0 (default) or empty: continues until the end of the source video.
   * 
   * - A value greater than 0: continues for the specified duration from the start time of the playlist.
   * 
   * > If the time point corresponding to the specified parameter exceeds the end of the source video, the default value is used.
   * 
   * @example
   * 0
   */
  sourceDuration?: number;
  /**
   * @remarks
   * The start time for generating the playlist. Unit: seconds. Valid values:
   * 
   * - 0 (default) or empty: starts from the beginning of the source video.
   * 
   * - A value greater than 0: starts from the specified time point in the source video.
   * 
   * > You can set this parameter together with **SourceDuration** to generate a playlist for a specific portion of the source video.
   * 
   * @example
   * 0
   */
  sourceStartTime?: number;
  /**
   * @remarks
   * The list of subtitles to add. This parameter is empty by default. A maximum of two subtitles are supported.
   */
  sourceSubtitles?: GenerateVideoPlaylistRequestSourceSubtitles[];
  /**
   * @remarks
   * The OSS URI of the video.
   * 
   * The OSS URI follows the format oss://${Bucket}/${Object}, where ${Bucket} is the name of the OSS bucket in the same region as the current project, and ${Object} is the full path of the file including the file name extension.
   * > Only OSS buckets with Standard storage class are supported.
   * > Buckets with hotlink protection whitelist configured are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-source-object/video.mp4
   */
  sourceURI?: string;
  /**
   * @remarks
   * The OSS object [tags](https://help.aliyun.com/document_detail/106678.html) to add to the generated TS files. You can use tags to control the lifecycle of OSS files.
   * 
   * @example
   * {"key1": "value1", "key2": "value2"}
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The array of just-in-time transcoding playlists. The maximum array length is 6. Each Target corresponds to at most one video Media Playlist and one or more subtitle Media Playlists.
   * > If more than one Target is configured, the **MasterURI** parameter must not be empty.
   * 
   * This parameter is required.
   */
  targets?: GenerateVideoPlaylistRequestTargets[];
  /**
   * @remarks
   * The custom information, which is returned in asynchronous message notifications. This allows you to associate message notifications with specific processes in your system. Maximum length: 2,048 bytes.
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

