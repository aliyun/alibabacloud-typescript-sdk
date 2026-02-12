// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageItem extends $dara.Model {
  /**
   * @remarks
   * The type of the image accelerator. Valid values:
   * 
   * *   cpu
   * *   gpu
   * 
   * @example
   * gpu
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The creator of the image.
   * 
   * @example
   * ken
   */
  authorId?: string;
  /**
   * @remarks
   * The computing framework that is encapsulated by the image. Valid values:
   * 
   * *   TFJob
   * *   PyTorchJob
   * 
   * @example
   * PyTorchJob
   */
  framework?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * 
   * *   Community
   * *   PAI
   * 
   * @example
   * Community
   */
  imageProviderType?: string;
  /**
   * @remarks
   * The tag of the docker image.
   * 
   * @example
   * tensorflow-training:2.3-cpu-py36-ubuntu18.04
   */
  imageTag?: string;
  /**
   * @remarks
   * The image URL address.
   * 
   * @example
   * registry.cn-beijing.aliyuncs.com/pai-dlc/tensorflow-training:2.3-cpu-py36-ubuntu18.04
   */
  imageUrl?: string;
  /**
   * @remarks
   * The VPC endpoint of the image URL. This address provides faster access speed.
   * 
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

