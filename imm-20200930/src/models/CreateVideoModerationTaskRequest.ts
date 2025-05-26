// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";


export class CreateVideoModerationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The interval of capturing video frames. Unit: seconds. Valid values: 1 to 600. Default value: 1.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * The maximum number of frames that can be captured from the video. Valid values: 5 to 3600. Default value: 200.
   * 
   * @example
   * 200
   */
  maxFrames?: number;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The scenarios of video moderation.
   */
  scenes?: string[];
  /**
   * @remarks
   * The OSS URI of the video.
   * 
   * Specify the OSS URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  sourceURI?: string;
  /**
   * @remarks
   * The custom tags. The custom tags help you retrieve the task.
   * 
   * @example
   * {"test": "val1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The custom information, which is returned in an asynchronous notification and facilitates notification management. The maximum length of the value is 2,048 bytes.
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

