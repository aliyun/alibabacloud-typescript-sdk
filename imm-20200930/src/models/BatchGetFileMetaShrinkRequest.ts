// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetFileMetaShrinkRequest extends $dara.Model {
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
  URIsShrink?: string;
  /**
   * @remarks
   * The fields to return. If you specify this parameter, only specified metadata fields are returned. You can use this parameter to control the size of the response.
   * 
   * If you do not specify this parameter or leave this parameter empty, the operation returns all metadata fields.
   */
  withFieldsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      URIsShrink: 'URIs',
      withFieldsShrink: 'WithFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      URIsShrink: 'string',
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

