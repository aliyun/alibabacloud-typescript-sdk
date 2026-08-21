// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProduceEditingProjectVideoRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The thumbnail of the online editing project.
   * 
   * @example
   * https://example.aliyundoc.com/6AB4D0E1E1C7446888351****.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the online editing project.
   * 
   * @example
   * Cloud clip project description
   */
  description?: string;
  /**
   * @remarks
   * The metadata of the produced video in JSON format. For more information about the structure, see [MediaMetadata](~~52839#title-rtf-ry5-gjp~~).
   * 
   * @example
   * {"Description":"Synthetic Video Description","Title":"Synthetic userData test"}
   */
  mediaMetadata?: string;
  ownerId?: number;
  /**
   * @remarks
   * The production configuration in JSON format. For more information about the structure, see [ProduceConfig](~~52839#title-ybl-7cs-y7d~~).
   * <notice>
   * The StorageLocation field can be ignored when the file storage region is Shanghai. It is required when the file storage region is in other regions.
   * </notice>
   * 
   * @example
   * {"TemplateGroupId":"6d11e25ea30a4c465435c74****"}
   */
  produceConfig?: string;
  /**
   * @remarks
   * The online editing project ID. You can obtain the ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com), choose **Production Center** > **Video Editing**, and view the ID.
   * - Obtain the value of the ProjectId parameter returned when you call the [CreateEditingProject](https://help.aliyun.com/document_detail/69048.html) operation.
   * 
   * @example
   * fb2101bf24b4cb318787dc****
   */
  projectId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The timeline of the online editing project in JSON format. For more information about the structure, see [Timeline](~~52839#07bc7fe0f2xuh~~).
   * >Make sure that each VideoTrackClip object contains a valid MediaId. Otherwise, the request fails.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"cc3308ac59615a54328bc3443****"},{"MediaId":"da87a9cff645cd88bc6d8326e4****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The title of the online editing project.
   * 
   * @example
   * Cloud Clip Project Title
   */
  title?: string;
  /**
   * @remarks
   * The custom settings in JSON format. The maximum length is 256 characters. The settings support message callbacks and other configurations. For more information about the structure, see [UserData](~~86952#title-vz7-xzs-0c5~~).
   * 
   * > To use the message callback in this parameter, configure the HTTP callback URL and select the corresponding callback event types in the console. Otherwise, the callback settings do not take effect.
   * 
   * @example
   * {"Extend":{"width":1280,"id":"028a8e56b1ebf6bb7afc74****","height":720},"MessageCallback":{"CallbackURL":"https://example.aliyundoc.com/2016-08-15/proxy/httpcallback/testcallback/","CallbackType":"http"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      coverURL: 'CoverURL',
      description: 'Description',
      mediaMetadata: 'MediaMetadata',
      ownerId: 'OwnerId',
      produceConfig: 'ProduceConfig',
      projectId: 'ProjectId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      timeline: 'Timeline',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      coverURL: 'string',
      description: 'string',
      mediaMetadata: 'string',
      ownerId: 'number',
      produceConfig: 'string',
      projectId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      timeline: 'string',
      title: 'string',
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

