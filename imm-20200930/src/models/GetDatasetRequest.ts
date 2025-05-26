// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. You can obtain the name of the dataset from the response of the [CreateDataset](https://help.aliyun.com/document_detail/478160.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
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
   * Specifies whether to enable real-time retrieval of file statistics. Default value: false.
   * 
   * *   If you set the value to true, FileCount and TotalFileSize in the response return true and valid values.
   * *   If you set the value to false, FileCount and TotalFileSize in the response return invalid values or 0.
   * 
   * @example
   * true
   */
  withStatistics?: boolean;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      withStatistics: 'WithStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      withStatistics: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

