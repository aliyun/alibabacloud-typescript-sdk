// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";


export class CreateImageModerationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization chain. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
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
   * The notification settings. For more information, click Notification. For information about the asynchronous notification format, see [Asynchronous notification format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
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
  scenes?: string[];
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
  tags?: { [key: string]: any };
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
      credentialConfig: 'CredentialConfig',
      interval: 'Interval',
      maxFrames: 'MaxFrames',
      notification: 'Notification',
      projectName: 'ProjectName',
      scenes: 'Scenes',
      sourceURI: 'SourceURI',
      tags: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      interval: 'number',
      maxFrames: 'number',
      notification: Notification,
      projectName: 'string',
      scenes: { 'type': 'array', 'itemType': 'string' },
      sourceURI: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
    if(Array.isArray(this.scenes)) {
      $dara.Model.validateArray(this.scenes);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

