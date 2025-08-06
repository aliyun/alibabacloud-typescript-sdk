// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProduceEditingProjectVideoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Default value: **app-1000000**. For more information, see [Multi-application service](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The thumbnail URL of the online editing project.
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
   * description test
   */
  description?: string;
  /**
   * @remarks
   * The video metadata. The value must be in JSON format. For more information about the parameter structure, see [MediaMetadata](~~52839#title_rtf_ry5_gjp~~).
   * 
   * @example
   * {"Description":"video description","Title":"userData test"}
   */
  mediaMetadata?: string;
  ownerId?: number;
  /**
   * @remarks
   * The configuration of video production. The value must be in the JSON format. For more information about the parameter structure, see [ProduceConfig](~~52839#title-ybl-7cs-y7d~~).
   * 
   * >  StorageLocation is required if you produce videos in a region other than China (Shanghai).
   * 
   * @example
   * {"TemplateGroupId":"6d11e25ea30a4c465435c74****"}
   */
  produceConfig?: string;
  /**
   * @remarks
   * The ID of the online editing project. You can use one of the following methods to obtain the ID of the online editing project:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Production Center** > **Video Editing** to view the ID of the online editing project.
   * *   Obtain the value of ProjectId from the response to the [AddEditingProject](https://help.aliyun.com/document_detail/69048.html) operation.
   * 
   * @example
   * fb2101bf24b4cb318787dc****
   */
  projectId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The timeline of the online editing project. The value must be in JSON format. For more information about the parameter structure, see [Timeline](~~52839#07bc7fe0f2xuh~~).
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
   * editing project test
   */
  title?: string;
  /**
   * @remarks
   * The custom configurations, such as the callback configuration. The value must be a JSON string. For more information about the parameter structure, see [UserData](~~86952#title_vz7_xzs_0c5~~).
   * 
   * > The callback configurations take effect only after you specify an HTTP URL for receiving callback notifications and select the event types in the ApsaraVideo VOD console.
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

