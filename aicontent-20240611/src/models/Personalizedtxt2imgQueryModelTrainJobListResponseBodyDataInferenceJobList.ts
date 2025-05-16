// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Personalizedtxt2imgQueryModelTrainJobListResponseBodyDataInferenceJobList extends $dara.Model {
  /**
   * @example
   * 2023-12-25T12:00:00
   */
  createTime?: string;
  /**
   * @example
   * 3220
   */
  id?: string;
  /**
   * @example
   * FINISHED
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
   * promptId-xxxx-xxxx-xxxx
   */
  promptId?: string;
  /**
   * @example
   * 0000.png
   */
  resultImageUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      promptId: 'promptId',
      resultImageUrl: 'resultImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      promptId: 'string',
      resultImageUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resultImageUrl)) {
      $dara.Model.validateArray(this.resultImageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

