// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";


export class CompareImageFacesRequestSource extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the image file.
   * 
   * Specify the URL in the `oss://<bucket>/<object>` format. `<bucket>` specifies the name of the OSS bucket that is in the same region as the current project. `<object>` specifies path of the object with the extension included.
   * 
   * @example
   * oss://test-bucket/test-object1
   */
  URI1?: string;
  /**
   * @remarks
   * The OSS URL of the image file.
   * 
   * Specify the URL in the `oss://<bucket>/<object>` format. `<bucket>` specifies the name of the OSS bucket that is in the same region as the current project, and `<object>` specifies the path of the object with the extension included.
   * 
   * @example
   * oss://test-bucket/test-object2
   */
  URI2?: string;
  static names(): { [key: string]: string } {
    return {
      URI1: 'URI1',
      URI2: 'URI2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI1: 'string',
      URI2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareImageFacesRequest extends $dara.Model {
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
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
   * The URLs of the two images for compression.
   */
  source?: CompareImageFacesRequestSource;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      projectName: 'string',
      source: CompareImageFacesRequestSource,
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

