// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSet } from "./DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSet";


export class DescribeImagePipelineExecutionsResponseBodyImagePipelineExecution extends $dara.Model {
  imagePipelineExecutionSet?: DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSet[];
  static names(): { [key: string]: string } {
    return {
      imagePipelineExecutionSet: 'ImagePipelineExecutionSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagePipelineExecutionSet: { 'type': 'array', 'itemType': DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSet },
    };
  }

  validate() {
    if(Array.isArray(this.imagePipelineExecutionSet)) {
      $dara.Model.validateArray(this.imagePipelineExecutionSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

