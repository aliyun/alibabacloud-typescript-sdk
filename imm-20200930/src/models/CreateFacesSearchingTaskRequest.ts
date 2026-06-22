// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Notification } from "./Notification";


export class CreateFacesSearchingTaskRequestSources extends $dara.Model {
  /**
   * @remarks
   * The OSS URI of the image.
   * 
   * The OSS URI must follow the format oss\\://${Bucket}/${Object}. `${Bucket}` is the name of the OSS bucket in the same region as the current project. `${Object}` is the full path of the file, including the file name extension.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateFacesSearchingTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. For more information, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The number of most similar faces to return. Valid values: 0 to 100. Default value: 5.
   * 
   * @example
   * 100
   */
  maxResult?: number;
  /**
   * @remarks
   * The notification configuration. For more information about the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
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
   * A list of images.
   */
  sources?: CreateFacesSearchingTaskRequestSources[];
  /**
   * @remarks
   * Custom user information. This information is returned in the asynchronous notification message to help you associate the message with your system. The maximum length is 2048 bytes.
   * 
   * @example
   * {"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResult: 'MaxResult',
      notification: 'Notification',
      projectName: 'ProjectName',
      sources: 'Sources',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResult: 'number',
      notification: Notification,
      projectName: 'string',
      sources: { 'type': 'array', 'itemType': CreateFacesSearchingTaskRequestSources },
      userData: 'string',
    };
  }

  validate() {
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

