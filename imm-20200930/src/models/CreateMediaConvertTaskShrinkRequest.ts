// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaConvertTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the main media file in the concatenation list of media files. The main media file provides the default transcoding settings, such as the resolution and the frame rate, for videos and audios. Default value: `0`. A value of `0` specifies that the main media file is aligned with the first media file in the concatenation list.
   */
  alignmentIndex?: number;
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The authorization chain. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The notification settings. For more information, see "Notification". For information about the asynchronous notification format, see [Asynchronous notification format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The source media files. If multiple files exist at the same time, the Concat feature is enabled. The video files are concatenated in the order of their URI inputs.
   * 
   * This parameter is required.
   */
  sourcesShrink?: string;
  /**
   * @remarks
   * The custom tags. You can search for or filter asynchronous tasks by custom tag.
   * 
   * @example
   * {"test":"val1"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The media processing tasks. You can specify multiple values for this parameter.
   * 
   * This parameter is required.
   */
  targetsShrink?: string;
  /**
   * @remarks
   * The custom information, which is returned as asynchronous notifications to facilitate notification management in your system. The maximum information length is 2,048 bytes.
   * 
   * @example
   * {"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      alignmentIndex: 'AlignmentIndex',
      credentialConfigShrink: 'CredentialConfig',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
      targetsShrink: 'Targets',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignmentIndex: 'number',
      credentialConfigShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      sourcesShrink: 'string',
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

