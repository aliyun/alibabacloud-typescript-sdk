// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectImageCroppingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cropping ratios. You can specify up to five cropping ratios. Take note of the following requirements:
   * 
   * *   The ratio must be an integer between 0 and 20.
   * *   The ratio must range from 0.5 to 2.
   * *   If you leave this parameter empty, the default processing logic is `["auto"]`.
   * 
   * >  Errors are reported in one of the following cases:\\
   * You specify more than five cropping ratios.\\
   * You pass an empty list to the system.\\
   * You specify a ratio that is not an integer, such as `4.1:3`.\\
   * The ratio is beyond the range of 0.5 to 2.
   * 
   * @example
   * ["1:1"]
   */
  aspectRatios?: string;
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The URI of the Object Storage Service (OSS) bucket in which you store the image.
   * 
   * Specify the value in the oss://${Bucket}/${Object} format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region as the current project. `${Object}` specifies the complete path to the image file that has an extension.
   * 
   * @example
   * oss://imm-test/testcases/facetest.jpg
   */
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      aspectRatios: 'AspectRatios',
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatios: 'string',
      credentialConfigShrink: 'string',
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

