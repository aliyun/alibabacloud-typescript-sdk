// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Personalizedtxt2imgInferenceJobInfoDTO } from "./Personalizedtxt2imgInferenceJobInfoDto";


export class Personalizedtxt2imgModelTrainJobInfoDTO extends $dara.Model {
  createTime?: string;
  createUserId?: string;
  imageUrl?: string[];
  inferenceJobList?: Personalizedtxt2imgInferenceJobInfoDTO[];
  jobStatus?: string;
  name?: string;
  objectType?: string;
  /**
   * @example
   * 123456
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      imageUrl: 'ImageUrl',
      inferenceJobList: 'InferenceJobList',
      jobStatus: 'JobStatus',
      name: 'Name',
      objectType: 'ObjectType',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'string',
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      inferenceJobList: { 'type': 'array', 'itemType': Personalizedtxt2imgInferenceJobInfoDTO },
      jobStatus: 'string',
      name: 'string',
      objectType: 'string',
      id: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrl)) {
      $dara.Model.validateArray(this.imageUrl);
    }
    if(Array.isArray(this.inferenceJobList)) {
      $dara.Model.validateArray(this.inferenceJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

