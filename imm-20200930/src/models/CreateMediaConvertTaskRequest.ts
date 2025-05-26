// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";
import { CreateMediaConvertTaskRequestSources } from "./CreateMediaConvertTaskRequestSources";
import { CreateMediaConvertTaskRequestTargets } from "./CreateMediaConvertTaskRequestTargets";


export class CreateMediaConvertTaskRequest extends $dara.Model {
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
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The notification settings. For more information, see "Notification". For information about the asynchronous notification format, see [Asynchronous notification format](https://help.aliyun.com/document_detail/2743997.html).
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
   * The source media files. If multiple files exist at the same time, the Concat feature is enabled. The video files are concatenated in the order of their URI inputs.
   * 
   * This parameter is required.
   */
  sources?: CreateMediaConvertTaskRequestSources[];
  /**
   * @remarks
   * The custom tags. You can search for or filter asynchronous tasks by custom tag.
   * 
   * @example
   * {"test":"val1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The media processing tasks. You can specify multiple values for this parameter.
   * 
   * This parameter is required.
   */
  targets?: CreateMediaConvertTaskRequestTargets[];
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
      credentialConfig: 'CredentialConfig',
      notification: 'Notification',
      projectName: 'ProjectName',
      sources: 'Sources',
      tags: 'Tags',
      targets: 'Targets',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignmentIndex: 'number',
      credentialConfig: CredentialConfig,
      notification: Notification,
      projectName: 'string',
      sources: { 'type': 'array', 'itemType': CreateMediaConvertTaskRequestSources },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: { 'type': 'array', 'itemType': CreateMediaConvertTaskRequestTargets },
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
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
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

