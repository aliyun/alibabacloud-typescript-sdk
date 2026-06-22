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
   * The language of the subtitle. The value must comply with the ISO 639-2 standard. The default value is empty.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The OSS URI of the subtitle file to embed.
   * 
   * The OSS URI must be in the format of oss\\://${Bucket}/${Object}. ${Bucket} is the name of the OSS bucket that is in the same region as the current project. ${Object} is the full path of the file.
   * 
   * > The **MasterURI** parameter must not be empty. The OSS URI of the subtitle file to embed, `oss://${Bucket}/${Object}`, must be in the same directory as or a subdirectory of the directory specified by **MasterURI**.
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
   * The parameter settings for audio processing. An empty value (default) disables audio processing. The output TS file will not contain an audio stream.
   * 
   * > The Audio and Subtitle fields within the same target are mutually exclusive. If the Audio field is set, the Subtitle field is ignored. You can set both Audio and Video. Audio specifies the audio information in the output video. You can also set only Audio to generate only audio information.
   */
  audio?: TargetAudio;
  /**
   * @remarks
   * The playback duration of a single TS file. Unit: seconds (s). Default value: 10. Value range: [5, 15].
   * 
   * @example
   * 10
   */
  duration?: number;
  /**
   * @remarks
   * An array of durations for the initial transcoded TS files. The maximum array length is 6. The default value is empty. This parameter is independent of the **Duration** parameter.
   */
  initialSegments?: number[];
  /**
   * @remarks
   * The initial transcoding duration. Unit: seconds (s). Default value: 30.
   * 
   * - If you set this parameter to 0, pre-transcoding is not performed.
   * 
   * - If you set this parameter to a value less than 0 or a value that exceeds the source video length, the entire video is initially transcoded.
   * 
   * - If the specified duration ends in the middle of a TS file, transcoding continues to the end of that TS file.
   * 
   * > This parameter is mainly used to reduce the waiting time for the first playback and improve the user experience. To replace a traditional VOD scenario, you can try initially transcoding the entire video.
   * 
   * @example
   * 30
   */
  initialTranscode?: number;
  /**
   * @remarks
   * The parameter settings for subtitle processing.
   * 
   * > The Subtitle field is mutually exclusive with the Video and Audio fields within the same target. Subtitles can be generated only when the Subtitle field is set independently.
   */
  subtitle?: TargetSubtitle;
  /**
   * @remarks
   * Adds OSS object [tags](https://help.aliyun.com/document_detail/106678.html) to the generated TS files. You can use OSS tags to control the lifecycle of OSS files.
   * 
   * > The tags for the current target are the union of the tags defined at this level and the tags defined at the parent level. If a tag has the same name, the value at the current level is used.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The number of TS files to transcode ahead when live transcoding is triggered. By default, 2 minutes of video is transcoded ahead.
   * 
   * - Example: If **Duration** is 10, the default value of **TranscodeAhead** is 12. You can specify this parameter to control the number of asynchronous forward transcodes. The value must be in the range of [10, 30].
   * 
   * @example
   * 12
   */
  transcodeAhead?: number;
  /**
   * @remarks
   * The OSS URI prefix for the output files of live transcoding. The output files include M3U8 files and TS files.
   * 
   * The OSS URI must be in the format of oss\\://${Bucket}/${Object}. ${Bucket} is the name of the OSS bucket that is in the same region as the current project. ${Object} is the prefix of the full path of the file, without the file name extension.
   * 
   * - Example: If URI is oss\\://test-bucket/test-object/output-video, one oss\\://test-bucket/test-object/output-video.m3u8 file and multiple oss\\://test-bucket/test-object/output-video-${token}-${index}.ts files are generated. ${token} is a unique string generated based on the transcoding parameters and is included in the API response. ${index} is the sequence number of the generated TS file, starting from 0.
   * 
   * > If the **MasterURI** parameter is not empty, the URI must be in the same directory as or a subdirectory of the directory specified by **MasterURI**.
   * 
   * @example
   * oss://test-bucket/test-object/output-video
   */
  URI?: string;
  /**
   * @remarks
   * The parameter settings for video processing. An empty value (default) disables video processing. The output TS file will not contain a video stream.
   * 
   * > The Video and Subtitle fields within the same target are mutually exclusive. If the Video field is set, the Subtitle field is ignored.
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
   * The chained authorization configuration. This parameter is not required. For more information, see [Use chained authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The OSS URI of the Master Playlist.
   * 
   * The OSS URI must be in the format of oss\\://${Bucket}/${Object}. ${Bucket} is the name of the OSS bucket that is in the same region as the current project. ${Object} is the full path of the file with the .m3u8 file name extension.
   * 
   * > If the playlist has subtitle inputs or multiple target outputs, MasterURI is required. The subtitle URI or target URI must be in the same directory as or a subdirectory of the directory specified by MasterURI.
   * 
   * @example
   * oss://test-bucket/test-object/master.m3u8
   */
  masterURI?: string;
  /**
   * @remarks
   * The message notification configuration. For more information, click Notification. For more information about the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * The policy to overwrite an existing Media Playlist. Valid values:
   * 
   * - overwrite (default): Overwrites the existing Media Playlist.
   * 
   * - skip-existing: Skips the generation and retains the existing Media Playlist.
   * 
   * @example
   * overwrite
   */
  overwritePolicy?: string;
  /**
   * @remarks
   * The project name. For more information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The duration for which the playlist is generated. Unit: seconds (s). Valid values:
   * 
   * - 0 (default) or empty: continues to the end of the source video.
   * 
   * - Greater than 0: lasts for the specified duration from the start time.
   * 
   * > If the specified duration extends beyond the end of the source video, the default value is used.
   * 
   * @example
   * 0
   */
  sourceDuration?: number;
  /**
   * @remarks
   * The start time for generating the playlist. Unit: seconds (s). Valid values:
   * 
   * - 0 (default) or empty: starts from the beginning of the source video.
   * 
   * - Greater than 0: starts from the specified time point in the source video.
   * 
   * > You can set this parameter together with the **SourceDuration** parameter to generate a playlist for a specific part of the source video.
   * 
   * @example
   * 0
   */
  sourceStartTime?: number;
  /**
   * @remarks
   * The list of subtitles to add. The default value is empty. You can add up to two subtitles.
   */
  sourceSubtitles?: GenerateVideoPlaylistRequestSourceSubtitles[];
  /**
   * @remarks
   * The OSS URI of the video.
   * 
   * The OSS URI must be in the format of oss\\://${Bucket}/${Object}. ${Bucket} is the name of the OSS bucket that is in the same region as the current project. ${Object} is the full path of the file, including the file name extension.
   * 
   * > Only OSS Standard storage buckets are supported. Buckets with hotlink protection whitelists are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-source-object/video.mp4
   */
  sourceURI?: string;
  /**
   * @remarks
   * Adds OSS object [tags](https://help.aliyun.com/document_detail/106678.html) to the generated TS files. You can use tags to control the lifecycle of OSS files.
   * 
   * @example
   * {"key1": "value1", "key2": "value2"}
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * An array of live transcoding playlists. The maximum array length is 6. Each target corresponds to a maximum of one video Media Playlist and one or more subtitle Media Playlists.
   * 
   * > If you configure more than one target, the **MasterURI** parameter must not be empty.
   * 
   * This parameter is required.
   */
  targets?: GenerateVideoPlaylistRequestTargets[];
  /**
   * @remarks
   * The custom information. This information is returned in the asynchronous notification message to help you associate the message with your services. The maximum length is 2,048 bytes.
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

