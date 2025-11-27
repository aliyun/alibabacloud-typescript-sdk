// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageModerationTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The time interval between two consecutive frames in a GIF or long image. Default value: 1.
   * 
   * @example
   * 2
   */
  interval?: number;
  /**
   * @remarks
   * The maximum number of frames that can be captured in a GIF or long image. Default value: 1.
   * 
   * @example
   * 10
   */
  maxFrames?: number;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
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
   * The scenarios in which you want to apply the image moderation task.
   */
  scenesShrink?: string;
  /**
   * @remarks
   * The URI of the Object Storage Service (OSS) bucket in which you store the image.
   * 
   * Specify the value in the `oss://<Bucket>/<Object>` format. `<Bucket>` specifies the name of the OSS bucket that resides in the same region as the current project. `<Object>` specifies the complete path to the image file that has an extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  sourceURI?: string;
  /**
   * @remarks
   * The custom tags. You can search for or filter asynchronous tasks by custom tag.
   * 
   * @example
   * {"test": "val1"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The user data, which is returned in an asynchronous notification and facilitates notification management. The maximum length of the user data is 2,048 bytes.
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

