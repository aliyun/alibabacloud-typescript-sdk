// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageFeatures } from "./DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageFeatures";
import { DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTags } from "./DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTags";


export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptions extends $dara.Model {
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * description.
   */
  description?: string;
  /**
   * @remarks
   * The image family.
   * 
   * @example
   * family
   */
  imageFamily?: string;
  /**
   * @remarks
   * The feature attributes of the image.
   */
  imageFeatures?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageFeatures;
  /**
   * @remarks
   * The prefix of the image name.
   * 
   * @example
   * imageName
   */
  imageName?: string;
  /**
   * @remarks
   * The tags of the image.
   */
  imageTags?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTags;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageFamily: 'ImageFamily',
      imageFeatures: 'ImageFeatures',
      imageName: 'ImageName',
      imageTags: 'ImageTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageFamily: 'string',
      imageFeatures: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageFeatures,
      imageName: 'string',
      imageTags: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTags,
    };
  }

  validate() {
    if(this.imageFeatures && typeof (this.imageFeatures as any).validate === 'function') {
      (this.imageFeatures as any).validate();
    }
    if(this.imageTags && typeof (this.imageTags as any).validate === 'function') {
      (this.imageTags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

