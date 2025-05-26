// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";


export class DetectImageLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * immimagetest
   */
  projectName?: string;
  /**
   * @remarks
   * The URI of the Object Storage Service (OSS) bucket in which you store the image.
   * 
   * Specify the value in the oss://${Bucket}/${Object} format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region as the current project. `${Object}` specifies the complete path to the image file that has an extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://imm-test/testcases/facetest.jpg
   */
  sourceURI?: string;
  /**
   * @remarks
   * The threshold of the label confidence. Labels whose confidence is lower than the specified threshold are not returned in the response. Valid values: 0 to 1. If you leave this parameter empty, the algorithm provides a default threshold.
   * 
   * @example
   * 1
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      projectName: 'string',
      sourceURI: 'string',
      threshold: 'number',
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

