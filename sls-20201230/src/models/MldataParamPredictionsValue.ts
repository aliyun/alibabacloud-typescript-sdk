// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MLDataParamPredictionsValue extends $dara.Model {
  /**
   * @remarks
   * The annotator.
   * 
   * @example
   * xxx
   */
  annotatedBy?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1694761550
   */
  updateTime?: number;
  /**
   * @remarks
   * The results.
   */
  results?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      annotatedBy: 'annotatedBy',
      updateTime: 'updateTime',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotatedBy: 'string',
      updateTime: 'number',
      results: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

