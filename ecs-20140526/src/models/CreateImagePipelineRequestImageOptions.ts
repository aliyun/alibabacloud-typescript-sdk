// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateImagePipelineRequestImageOptionsImageFeatures } from "./CreateImagePipelineRequestImageOptionsImageFeatures";
import { CreateImagePipelineRequestImageOptionsImageTags } from "./CreateImagePipelineRequestImageOptionsImageTags";


export class CreateImagePipelineRequestImageOptions extends $dara.Model {
  /**
   * @remarks
   * The description of the image. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The image family. The image family name must be 2 to 128 characters in length. The name must start with a letter and cannot start with acs: or aliyun. The name cannot contain http:// or https:// and can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * family
   */
  imageFamily?: string;
  /**
   * @remarks
   * The feature attributes of the image.
   */
  imageFeatures?: CreateImagePipelineRequestImageOptionsImageFeatures;
  /**
   * @remarks
   * The prefix of the image name. The prefix must be 2 to 64 characters in length. The prefix must start with a letter and cannot start with `http://` or `https://`. The prefix can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * The system generates the final image name that consists of the specified prefix and the ID of the build task (`ExecutionId`) in the format of `{ImageName}_{ExecutionId}`.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The tags to add to the image.
   */
  imageTags?: CreateImagePipelineRequestImageOptionsImageTags[];
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
      imageFeatures: CreateImagePipelineRequestImageOptionsImageFeatures,
      imageName: 'string',
      imageTags: { 'type': 'array', 'itemType': CreateImagePipelineRequestImageOptionsImageTags },
    };
  }

  validate() {
    if(this.imageFeatures && typeof (this.imageFeatures as any).validate === 'function') {
      (this.imageFeatures as any).validate();
    }
    if(Array.isArray(this.imageTags)) {
      $dara.Model.validateArray(this.imageTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

