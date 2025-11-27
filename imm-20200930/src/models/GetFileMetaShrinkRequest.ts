// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileMetaShrinkRequest extends $dara.Model {
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
   * The URI of the file. Make sure that the file is indexed****.
   * 
   * Specify the OSS URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * Specify the URI of the file in Photo and Drive Service in the pds://domains/${domain}/drives/${drive}/files/${file}/revisions/${revision} format.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  URI?: string;
  /**
   * @remarks
   * The metadata fields that you want to include in the response. You can use this parameter to reduce the size of the response.
   * 
   * If you do not specify this parameter or leave this parameter empty, the operation returns all metadata fields of the file.
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

