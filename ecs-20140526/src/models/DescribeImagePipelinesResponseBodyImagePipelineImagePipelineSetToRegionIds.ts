// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetToRegionIds extends $dara.Model {
  toRegionId?: string[];
  static names(): { [key: string]: string } {
    return {
      toRegionId: 'ToRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      toRegionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.toRegionId)) {
      $dara.Model.validateArray(this.toRegionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

