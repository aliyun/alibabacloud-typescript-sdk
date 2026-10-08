// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetFileMetaRequest extends $dara.Model {
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
   * The list of file URIs. A maximum of 100 URIs are supported.
   * 
   * This parameter is required.
   */
  URIs?: string[];
  /**
   * @remarks
   * The list of fields to be returned. If you specify this parameter, only the values of the specified fields are returned, instead of all existing metadata fields. This parameter can be used to reduce the size of the returned struct.
   * 
   * If you do not specify this parameter or leave it empty, all fields are returned.
   */
  withFields?: string[];
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      URIs: 'URIs',
      withFields: 'WithFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      URIs: { 'type': 'array', 'itemType': 'string' },
      withFields: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.URIs)) {
      $dara.Model.validateArray(this.URIs);
    }
    if(Array.isArray(this.withFields)) {
      $dara.Model.validateArray(this.withFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

