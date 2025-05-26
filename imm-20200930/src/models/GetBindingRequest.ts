// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBindingRequest extends $dara.Model {
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
   * The URI of the OSS bucket to which you bind the dataset.
   * 
   * Specify the value in the oss://${Bucket} format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region as the current project.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://examplebucket
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
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

