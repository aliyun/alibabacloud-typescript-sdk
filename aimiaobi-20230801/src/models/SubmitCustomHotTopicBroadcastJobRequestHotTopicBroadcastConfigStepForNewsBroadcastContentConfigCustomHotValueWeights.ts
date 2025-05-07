// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfigCustomHotValueWeights extends $dara.Model {
  /**
   * @example
   * views
   */
  dimension?: string;
  /**
   * @example
   * 维度名称
   */
  dimensionName?: string;
  /**
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensionName: 'DimensionName',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      dimensionName: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

