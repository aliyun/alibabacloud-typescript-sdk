// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectImageBodiesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
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
  /**
   * @remarks
   * The accuracy level of detecting and recognizing specific content in the image. Valid values: 0 to 1. Default value: 0.6. A higher sensitivity specifies that more image details can be detected.
   * 
   * @example
   * 0.6
   * 
   * **if can be null:**
   * true
   */
  sensitivity?: number;
  /**
   * @remarks
   * The URI of the Object Storage Service (OSS) bucket in which the image file is stored.
   * 
   * Specify the value in the oss://${Bucket}/${Object} format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region as the current project. `${Object}` specifies the complete path to the file that has an extension.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sensitivity: 'Sensitivity',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      projectName: 'string',
      sensitivity: 'number',
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

