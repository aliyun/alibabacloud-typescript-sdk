// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoModerationTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The chained authorization configuration. This parameter is optional. For more information, see [Use chained authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The interval for video snapshots, in seconds. The value can be an integer from 1 to 600. The default value is 1.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * The maximum number of frames that can be captured for this detection task. The value can be an integer from 5 to 3,600. The default value is 200.
   * 
   * @example
   * 200
   */
  maxFrames?: number;
  /**
   * @remarks
   * The notification configuration. For the format of asynchronous notification messages, see the metadata index section in [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The name of the project. For more information about how to get the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The video detection scenarios.
   */
  scenesShrink?: string;
  /**
   * @remarks
   * The OSS URI of the video.
   * 
   * The OSS URI must follow the format oss\\://${Bucket}/${Object}. `${Bucket}` is the name of the OSS bucket in the same region as the project. `${Object}` is the full path of the file, including the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  sourceURI?: string;
  /**
   * @remarks
   * Custom tags used to search for tasks.
   * 
   * @example
   * {"test": "val1"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * Custom information that is returned in the asynchronous notification message. Use this information to associate the notification message with your internal system. The maximum length is 2,048 bytes.
   * 
   * @example
   * {"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      interval: 'Interval',
      maxFrames: 'MaxFrames',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      scenesShrink: 'Scenes',
      sourceURI: 'SourceURI',
      tagsShrink: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      interval: 'number',
      maxFrames: 'number',
      notificationShrink: 'string',
      projectName: 'string',
      scenesShrink: 'string',
      sourceURI: 'string',
      tagsShrink: 'string',
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

