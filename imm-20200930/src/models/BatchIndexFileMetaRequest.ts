// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InputFile } from "./InputFile";
import { Notification } from "./Notification";


export class BatchIndexFileMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset name. For more information about how to obtain the dataset name, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * A list of OSS files. This is an array in JSON format that can contain up to 100 files.
   * 
   * This parameter is required.
   */
  files?: InputFile[];
  /**
   * @remarks
   * The notification configuration. For more information, click Notification. For the format of asynchronous notification messages, see the metadata indexing section in [Asynchronous notification message formats](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
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
   * Custom user data. This parameter takes effect only when you specify an MNS configuration for the Notification parameter. The data is returned in the asynchronous notification message, which you can use to associate the message with your services. The maximum length is 2048 bytes.
   * 
   * @example
   * {
   *       "id": "test-id",
   *       "name": "test-name"
   * }
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      files: 'Files',
      notification: 'Notification',
      projectName: 'ProjectName',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      files: { 'type': 'array', 'itemType': InputFile },
      notification: Notification,
      projectName: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

