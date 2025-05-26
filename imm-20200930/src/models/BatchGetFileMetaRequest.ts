// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetFileMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset.[](~~478160~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The array of object URIs. You can specify up to 100 object URIs in an array.
   * 
   * This parameter is required.
   */
  URIs?: string[];
  /**
   * @remarks
   * The fields to return. If you specify this parameter, only specified metadata fields are returned. You can use this parameter to control the size of the response.
   * 
   * If you do not specify this parameter or leave this parameter empty, the operation returns all metadata fields.
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

