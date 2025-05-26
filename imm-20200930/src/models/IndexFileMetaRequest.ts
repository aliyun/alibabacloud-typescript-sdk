// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InputFile } from "./InputFile";
import { Notification } from "./Notification";


export class IndexFileMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. You can obtain the name of the dataset from the response of the [CreateDataset](https://help.aliyun.com/document_detail/478160.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The file for which you want to create a metadata index. The value must be in the JSON format.
   * 
   * This parameter is required.
   */
  file?: InputFile;
  /**
   * @remarks
   * The notification settings. For more information, see the "Metadata indexing" section of the [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html) topic.
   */
  notification?: Notification;
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      file: 'File',
      notification: 'Notification',
      projectName: 'ProjectName',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      file: InputFile,
      notification: Notification,
      projectName: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
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

