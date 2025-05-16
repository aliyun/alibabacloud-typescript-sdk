// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Personalizedtxt2imgInferenceJobInfoDTO extends $dara.Model {
  /**
   * @example
   * 123456
   */
  createUserId?: string;
  /**
   * @example
   * 123456
   */
  id?: string;
  /**
   * @example
   * 123456
   */
  jobStatus?: string;
  /**
   * @example
   * 123456
   */
  modelId?: string;
  /**
   * @example
   * 123456
   */
  resultImageUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      createUserId: 'createUserId',
      id: 'id',
      jobStatus: 'jobStatus',
      modelId: 'modelId',
      resultImageUrl: 'resultImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createUserId: 'string',
      id: 'string',
      jobStatus: 'string',
      modelId: 'string',
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

