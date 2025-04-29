// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTagsImageTag } from "./DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTagsImageTag";


export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTags extends $dara.Model {
  imageTag?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTagsImageTag[];
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: { 'type': 'array', 'itemType': DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTagsImageTag },
    };
  }

  validate() {
    if(Array.isArray(this.imageTag)) {
      $dara.Model.validateArray(this.imageTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

