// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageFigureClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
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
   * The OSS URI of the image.
   * 
   * Specify the OSS URI in the `oss://${Bucket}/${Object}` format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      datasetName: 'string',
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

