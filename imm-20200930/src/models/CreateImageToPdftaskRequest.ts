// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";
import { CreateImageToPDFTaskRequestSources } from "./CreateImageToPdftaskRequestSources";


export class CreateImageToPDFTaskRequest extends $dara.Model {
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The configurations of authorization chains. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
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
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The list of images. The sequence of image URIs in the list determines the order in which they are converted.
   * 
   * This parameter is required.
   */
  sources?: CreateImageToPDFTaskRequestSources[];
  /**
   * @remarks
   * The custom tags. You can search for or filter asynchronous tasks by custom tag.
   * 
   * @example
   * {
   *       "User": "Jane"
   * }
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The OSS URI of the output file.
   * 
   * Specify the OSS URI in the oss://${bucketname}/${objectname} format, where ${bucketname} is the name of the bucket in the same region as the current project and ${objectname} is the path of the object with the extension included.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://examplebucket/outputDocument.pdf
   */
  targetURI?: string;
  /**
   * @remarks
   * The custom information, which is returned in an asynchronous notification and facilitates notification management. The maximum length of the value is 2,048 bytes.
   * 
   * @example
   * test-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      notification: 'Notification',
      projectName: 'ProjectName',
      sources: 'Sources',
      tags: 'Tags',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      notification: Notification,
      projectName: 'string',
      sources: { 'type': 'array', 'itemType': CreateImageToPDFTaskRequestSources },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targetURI: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

