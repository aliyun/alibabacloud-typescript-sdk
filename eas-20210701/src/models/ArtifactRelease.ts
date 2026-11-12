// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArtifactRelease extends $dara.Model {
  /**
   * @remarks
   * The artifact reference name.
   * 
   * @example
   * python-env
   */
  artifactRef?: string;
  /**
   * @remarks
   * The creation time of the artifact release record.
   * 
   * @example
   * 2024-01-15T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The artifact description.
   * 
   * @example
   * Container image for model inference
   */
  description?: string;
  /**
   * @remarks
   * The container image address used by the artifact.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/eas/echo_cn-shanghai:v0.0.1-20210129111320
   */
  image?: string;
  /**
   * @remarks
   * The artifact type.
   * 
   * @example
   * Image
   */
  type?: string;
  /**
   * @remarks
   * The artifact version.
   * 
   * @example
   * V2.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      artifactRef: 'ArtifactRef',
      createdAt: 'CreatedAt',
      description: 'Description',
      image: 'Image',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactRef: 'string',
      createdAt: 'string',
      description: 'string',
      image: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

