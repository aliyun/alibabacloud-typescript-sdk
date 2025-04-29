// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSet } from "./DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSet";


export class DescribeImagePipelinesResponseBodyImagePipeline extends $dara.Model {
  imagePipelineSet?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSet[];
  static names(): { [key: string]: string } {
    return {
      imagePipelineSet: 'ImagePipelineSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagePipelineSet: { 'type': 'array', 'itemType': DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSet },
    };
  }

  validate() {
    if(Array.isArray(this.imagePipelineSet)) {
      $dara.Model.validateArray(this.imagePipelineSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

