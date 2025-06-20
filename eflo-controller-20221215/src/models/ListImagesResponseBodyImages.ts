// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The architecture.
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * alibaba cloud linux 3 full for H800
   */
  description?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * i190951671671438639388
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * CentOS_7.9_x86_64_FULL_20221110
   */
  imageName?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 7.9
   */
  imageVersion?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 20
   */
  nodeCount?: number;
  /**
   * @remarks
   * The platform.
   * 
   * @example
   * ALinux3
   */
  platform?: string;
  /**
   * @remarks
   * The MD5 hash value of the file.
   * 
   * @example
   * 40741292480fc6d778138adcf8c
   */
  releaseFileMd5?: string;
  /**
   * @remarks
   * The image size.
   * 
   * @example
   * 5.8G
   */
  releaseFileSize?: string;
  /**
   * @remarks
   * The image type.
   * 
   * @example
   * Public
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      description: 'Description',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageVersion: 'ImageVersion',
      nodeCount: 'NodeCount',
      platform: 'Platform',
      releaseFileMd5: 'ReleaseFileMd5',
      releaseFileSize: 'ReleaseFileSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      description: 'string',
      imageId: 'string',
      imageName: 'string',
      imageVersion: 'string',
      nodeCount: 'number',
      platform: 'string',
      releaseFileMd5: 'string',
      releaseFileSize: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

