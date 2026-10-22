// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. For more information about how to obtain the dataset name, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The name of the project. For more information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The URI of the OSS bucket to which the dataset is bound.
   * 
   * The URI of an OSS bucket is in the oss://${Bucket} format, where `${Bucket}` is the name of the OSS bucket that resides in the same region as the current project.
   * 
   * @example
   * oss://test-bucket
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

