// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfigCustomHotValueWeights extends $dara.Model {
  /**
   * @example
   * views
   */
  dimension?: string;
  /**
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
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

