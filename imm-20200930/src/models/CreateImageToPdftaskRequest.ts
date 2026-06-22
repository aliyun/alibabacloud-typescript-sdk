// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";


export class CreateImageToPDFTaskRequestSources extends $dara.Model {
  /**
   * @remarks
   * The rotation angle of the image in degrees. Valid values:
   * 
   * - 0 (default)
   * 
   * - 90
   * 
   * - 180
   * 
   * - 270
   * 
   * @example
   * 90
   */
  rotate?: number;
  /**
   * @remarks
   * The OSS address of the source image.
   * 
   * The address must be in the \\`oss\\://${Bucket}/${Object}\\` format. \\``${Bucket}`\\` must be an OSS bucket in the same region as the project. \\``${Object}`\\` must be the full path of the file, including its file name extension.
   * 
   * Supported formats: JPG, JP2, PNG, TIFF, WebP, BMP, and SVG.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://examplebucket/sampleobject.jpg
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      rotate: 'Rotate',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rotate: 'number',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageToPDFTaskRequest extends $dara.Model {
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The chained authorization configuration. For more information, see [Use chained authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The message notification configuration. For more information, click Notification. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * The name of the project. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * A list of input images. The images are converted in the order of their URIs in this list.
   * 
   * This parameter is required.
   */
  sources?: CreateImageToPDFTaskRequestSources[];
  /**
   * @remarks
   * Custom tags used to search for and filter asynchronous tasks.
   * 
   * @example
   * {
   *       "User": "Jane"
   * }
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The OSS address where the output PDF file is stored.
   * 
   * The address must be in the \\`oss\\://${bucketname}/${objectname}\\` format. \\`${bucketname}\\` must be an OSS bucket in the same region as the project. \\`${objectname}\\` must be the path of the file, including the file name.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://examplebucket/outputDocument.pdf
   */
  targetURI?: string;
  /**
   * @remarks
   * Custom user information that is returned in the asynchronous notification message. This helps you associate the notification message with your system. The maximum length is 2048 bytes.
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

