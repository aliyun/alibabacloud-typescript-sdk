// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IndexFileMetaShrinkRequest extends $dara.Model {
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
  fileShrink?: string;
  /**
   * @remarks
   * The notification settings. For more information, see the "Metadata indexing" section of the [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html) topic.
   */
  notificationShrink?: string;
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
      fileShrink: 'File',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      fileShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
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

