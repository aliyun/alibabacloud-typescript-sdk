// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";
import { GenerateVideoPlaylistRequestSourceSubtitles } from "./GenerateVideoPlaylistRequestSourceSubtitles";
import { GenerateVideoPlaylistRequestTargets } from "./GenerateVideoPlaylistRequestTargets";


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

