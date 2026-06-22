// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageModerationTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The chained authorization configuration. This parameter is optional. For more information, see [Use chained authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The frame capture frequency. This parameter is used for GIF and long image detection. The default value is 1.
   * 
   * @example
   * 2
   */
  interval?: number;
  /**
   * @remarks
   * The maximum number of frames to capture. This parameter is used for GIF and long image detection. The default value is 1.
   * 
   * @example
   * 10
   */
  maxFrames?: number;
  /**
   * @remarks
   * The notification configuration. For more information about the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The project name. For more information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The image detection scenarios.
   */
  scenesShrink?: string;
  /**
   * @remarks
   * The OSS URI of the image.
   * 
   * The URI must follow the `oss://<Bucket>/<Object>` format. `<Bucket>` is the name of the OSS bucket that is in the same region as the project. `<Object>` is the full path of the file, including the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  sourceURI?: string;
  /**
   * @remarks
   * The custom tags. You can use tags to search for and filter asynchronous tasks.
   * 
   * @example
   * {
   *       "User": "Jane"
   * }
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The custom information. This information is returned in the asynchronous notification message to help you associate the message with your system. The value can be up to 2,048 bytes long.
   * 
   * @example
   * test-data
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

