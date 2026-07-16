// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateVideoPlaylistShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **Leave this parameter empty unless you have specific requirements.**
   * 
   * The China authorization configuration. This parameter is optional. For more information, see [Use Chinese authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
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
  notificationShrink?: string;
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
  sourceSubtitlesShrink?: string;
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
  tagsShrink?: string;
  /**
   * @remarks
   * The array of just-in-time transcoding playlists. The maximum array length is 6. Each Target corresponds to at most one video Media Playlist and one or more subtitle Media Playlists.
   * > If more than one Target is configured, the **MasterURI** parameter must not be empty.
   * 
   * This parameter is required.
   */
  targetsShrink?: string;
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
      credentialConfigShrink: 'CredentialConfig',
      masterURI: 'MasterURI',
      notificationShrink: 'Notification',
      overwritePolicy: 'OverwritePolicy',
      projectName: 'ProjectName',
      sourceDuration: 'SourceDuration',
      sourceStartTime: 'SourceStartTime',
      sourceSubtitlesShrink: 'SourceSubtitles',
      sourceURI: 'SourceURI',
      tagsShrink: 'Tags',
      targetsShrink: 'Targets',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      masterURI: 'string',
      notificationShrink: 'string',
      overwritePolicy: 'string',
      projectName: 'string',
      sourceDuration: 'number',
      sourceStartTime: 'number',
      sourceSubtitlesShrink: 'string',
      sourceURI: 'string',
      tagsShrink: 'string',
      targetsShrink: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

