// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateVideoPlaylistShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
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
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
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
  sourceSubtitlesShrink?: string;
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
  tagsShrink?: string;
  /**
   * @remarks
   * The array of live transcoding playlists. The maximum length of the array is 6. Each element corresponds to at most one video media playlist and one or more subtitle media playlists.
   * 
   * >  If the array contains more than one element, the **MasterURI** parameter cannot be left empty.
   * 
   * This parameter is required.
   */
  targetsShrink?: string;
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

