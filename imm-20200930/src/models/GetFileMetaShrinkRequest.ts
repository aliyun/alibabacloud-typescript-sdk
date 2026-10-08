// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileMetaShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. For more information about how to obtain the dataset name, refer to [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The name of the project. For more information about how to obtain the project name, refer to [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The URI of the file. Make sure that the file has been **indexed**.
   * 
   * The OSS URI format is oss://${Bucket}/${Object}, where `${Bucket}` is the name of the OSS bucket that resides in the same region as the current project, and `${Object}` is the full path of the file including the file name extension.
   * 
   * The PDS URI format is pds://domains/${domain}/drives/${drive}/files/${file}/revisions/${revision}.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  URI?: string;
  /**
   * @remarks
   * Specifies the specific fields to return, instead of all existing metadata fields. You can use this parameter to reduce the size of the returned struct.
   * 
   * If you do not specify this parameter or leave it empty, all fields are returned.
   */
  withFieldsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      URI: 'URI',
      withFieldsShrink: 'WithFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      URI: 'string',
      withFieldsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

