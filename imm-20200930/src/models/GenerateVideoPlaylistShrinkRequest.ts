// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateVideoPlaylistShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **If you do not have special requirements, leave this parameter empty.**
   * 
   * The chained authorization configuration. This parameter is not required. For more information, see [Use chained authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
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
  notificationShrink?: string;
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
  sourceSubtitlesShrink?: string;
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
  tagsShrink?: string;
  /**
   * @remarks
   * An array of live transcoding playlists. The maximum array length is 6. Each target corresponds to a maximum of one video Media Playlist and one or more subtitle Media Playlists.
   * 
   * > If you configure more than one target, the **MasterURI** parameter must not be empty.
   * 
   * This parameter is required.
   */
  targetsShrink?: string;
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

