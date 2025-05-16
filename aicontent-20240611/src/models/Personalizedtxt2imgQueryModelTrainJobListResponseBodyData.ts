// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Personalizedtxt2imgQueryModelTrainJobListResponseBodyDataInferenceJobList } from "./Personalizedtxt2imgQueryModelTrainJobListResponseBodyDataInferenceJobList";


export class Personalizedtxt2imgQueryModelTrainJobListResponseBodyData extends $dara.Model {
  createTime?: string;
  /**
   * @example
   * 456
   */
  id?: string;
  imageUrl?: string[];
  inferenceImageCount?: number;
  inferenceJobList?: Personalizedtxt2imgQueryModelTrainJobListResponseBodyDataInferenceJobList[];
  /**
   * @example
   * TRAINING
   */
  jobStatus?: string;
  /**
   * @example
   * 0.5
   */
  jobTrainProgress?: number;
  /**
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @example
   * 可爱熊猫模型训练任务
   */
  name?: string;
  /**
   * @example
   * panda
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      imageUrl: 'imageUrl',
      inferenceImageCount: 'inferenceImageCount',
      inferenceJobList: 'inferenceJobList',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      name: 'name',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      inferenceImageCount: 'number',
      inferenceJobList: { 'type': 'array', 'itemType': Personalizedtxt2imgQueryModelTrainJobListResponseBodyDataInferenceJobList },
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      name: 'string',
      objectType: 'string',
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

