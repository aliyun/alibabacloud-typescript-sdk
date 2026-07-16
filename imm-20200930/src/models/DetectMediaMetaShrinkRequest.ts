// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectMediaMetaShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **Leave this parameter empty unless you have special requirements.**
   * 
   * The chain authorization configuration. This parameter is optional. For more information, see [Use chain authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The project name. For information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URI of the media file.
   * 
   * The OSS URI follows the format oss://${Bucket}/${Object}, where `${Bucket}` is the name of an OSS bucket in the same region as the current project, and `${Object}` is the full path of the file including the file name extension.
   * 
   * @example
   * oss://examplebucket/sampleobject.mp4
   */
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

