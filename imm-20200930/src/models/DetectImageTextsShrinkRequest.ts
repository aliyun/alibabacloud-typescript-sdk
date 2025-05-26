// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectImageTextsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The name of the project. For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URI of the file.
   * 
   * Specify the URI in the oss://${Bucket}/${Object} format. ${Bucket} specifies the name of an OSS bucket that is in the same region as the current project. ${Object} specifies the path of the object with the extension included.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object.jpg
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

