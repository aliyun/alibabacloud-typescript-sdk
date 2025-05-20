// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * Architecture
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * alibaba cloud linux 3 full for H800
   */
  description?: string;
  /**
   * @remarks
   * Image ID
   * 
   * @example
   * i190951671671438639388
   */
  imageId?: string;
  /**
   * @remarks
   * Image name
   * 
   * @example
   * CentOS_7.9_x86_64_FULL_20221110
   */
  imageName?: string;
  /**
   * @remarks
   * Image version
   * 
   * @example
   * 7.9
   */
  imageVersion?: string;
  /**
   * @remarks
   * node count
   * 
   * @example
   * 20
   */
  nodeCount?: number;
  /**
   * @remarks
   * Platform
   * 
   * @example
   * ALinux3
   */
  platform?: string;
  /**
   * @remarks
   * File MD5
   * 
   * @example
   * 40741292480fc6d778138adcf8c
   */
  releaseFileMd5?: string;
  /**
   * @remarks
   * Image size
   * 
   * @example
   * 5.8G
   */
  releaseFileSize?: string;
  /**
   * @remarks
   * image type
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

