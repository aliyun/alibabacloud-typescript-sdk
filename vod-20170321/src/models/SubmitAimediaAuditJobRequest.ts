// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIMediaAuditJobRequest extends $dara.Model {
  censorProvider?: string;
  /**
   * @remarks
   * The configuration of the review job.
   * - For other configuration items of the review job, only the ResourceType field is currently supported. This field controls the media file type, and you can adjust the review standards and rules for the specified type.
   * - To adjust the review standards and rules for a ResourceType, submit a ticket for technical support. For information about how to submit a ticket, refer to [Contact us](https://help.aliyun.com/document_detail/464625.html).
   * - Usage notes for ResourceType: Only letters, digits, and underscores (_) are allowed.
   * 
   * @example
   * {"ResourceType":"****_movie"}
   */
  mediaAuditConfiguration?: string;
  /**
   * @remarks
   * The audio or video ID. Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Review Management** > **Video Review** to view the audio or video ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fe028d09441afffb138cd7ee****
   */
  mediaId?: string;
  /**
   * @remarks
   * The media type. Currently, only **video** is supported.
   * 
   * @example
   * video
   */
  mediaType?: string;
  serviceParameters?: string;
  /**
   * @remarks
   * The AI template ID. You can obtain the ID by using one of the following methods:
   * - When you call the [AddAITemplate](https://help.aliyun.com/document_detail/102930.html) operation to add an AI template, the AI template ID is the value of the TemplateId response parameter.
   * - After the AI template is added, call the [ListAITemplate](https://help.aliyun.com/document_detail/102936.html) operation to query the AI template ID, which is the value of the TemplateId response parameter.
   * 
   * > If you do not specify an AI template ID, the default AI template ID for automated review is used.
   * 
   * @example
   * a07a7f7d7d10eb9fd999e56ecc****
   */
  templateId?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string that supports settings such as message callbacks. For more information, refer to [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * > To use message callbacks in this parameter, you must configure an HTTP callback URL and select the corresponding callback event types in the console. Otherwise, the callback settings do not take effect. For information about how to configure HTTP callbacks in the console, refer to [Callback settings](https://help.aliyun.com/document_detail/86071.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://test.test.com"},"Extend":{"localId":"xxx","test":"www"}}
   */
  userData?: string;
  videoService?: string;
  voiceService?: string;
  static names(): { [key: string]: string } {
    return {
      censorProvider: 'CensorProvider',
      mediaAuditConfiguration: 'MediaAuditConfiguration',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      serviceParameters: 'ServiceParameters',
      templateId: 'TemplateId',
      userData: 'UserData',
      videoService: 'VideoService',
      voiceService: 'VoiceService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorProvider: 'string',
      mediaAuditConfiguration: 'string',
      mediaId: 'string',
      mediaType: 'string',
      serviceParameters: 'string',
      templateId: 'string',
      userData: 'string',
      videoService: 'string',
      voiceService: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

