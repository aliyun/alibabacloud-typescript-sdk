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

export class ListImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image details.
   */
  images?: ListImagesResponseBodyImages[];
  /**
   * @remarks
   * The token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0FC4A1C7-421C-5EAB-9361-4C0338EFA287
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

