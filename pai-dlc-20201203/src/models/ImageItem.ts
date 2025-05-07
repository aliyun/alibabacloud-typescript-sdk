// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageItem extends $dara.Model {
  /**
   * @example
   * gpu
   */
  acceleratorType?: string;
  /**
   * @example
   * ken
   */
  authorId?: string;
  /**
   * @example
   * PyTorchJob
   */
  framework?: string;
  /**
   * @example
   * Community
   */
  imageProviderType?: string;
  /**
   * @example
   * tensorflow-training:2.3-cpu-py36-ubuntu18.04
   */
  imageTag?: string;
  /**
   * @example
   * registry.cn-beijing.aliyuncs.com/pai-dlc/tensorflow-training:2.3-cpu-py36-ubuntu18.04
   */
  imageUrl?: string;
  /**
   * @example
   * registry-vpc.cn-beijing.aliyuncs.com/pai-dlc/tensorflow-training:2.3-cpu-py36-ubuntu18.04
   */
  imageUrlVpc?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      authorId: 'AuthorId',
      framework: 'Framework',
      imageProviderType: 'ImageProviderType',
      imageTag: 'ImageTag',
      imageUrl: 'ImageUrl',
      imageUrlVpc: 'ImageUrlVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      authorId: 'string',
      framework: 'string',
      imageProviderType: 'string',
      imageTag: 'string',
      imageUrl: 'string',
      imageUrlVpc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

