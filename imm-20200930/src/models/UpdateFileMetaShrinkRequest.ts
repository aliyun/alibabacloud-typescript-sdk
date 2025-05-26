// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileMetaShrinkRequest extends $dara.Model {
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
   * The file and its metadata items to be updated. The value must be in the JSON format.
   * 
   * This parameter is required.
   */
  fileShrink?: string;
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
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      fileShrink: 'File',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      fileShrink: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

