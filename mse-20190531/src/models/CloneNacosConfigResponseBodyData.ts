// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CloneNacosConfigResponseBodyDataFailData } from "./CloneNacosConfigResponseBodyDataFailData";
import { CloneNacosConfigResponseBodyDataSkipData } from "./CloneNacosConfigResponseBodyDataSkipData";


export class CloneNacosConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Failed configuration information.
   */
  failData?: CloneNacosConfigResponseBodyDataFailData[];
  /**
   * @remarks
   * Number of skips.
   * 
   * @example
   * 1
   */
  skipCount?: number;
  /**
   * @remarks
   * Skipped configuration information.
   */
  skipData?: CloneNacosConfigResponseBodyDataSkipData[];
  /**
   * @remarks
   * Number of successes.
   * 
   * @example
   * 100
   */
  succCount?: number;
  static names(): { [key: string]: string } {
    return {
      failData: 'FailData',
      skipCount: 'SkipCount',
      skipData: 'SkipData',
      succCount: 'SuccCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failData: { 'type': 'array', 'itemType': CloneNacosConfigResponseBodyDataFailData },
      skipCount: 'number',
      skipData: { 'type': 'array', 'itemType': CloneNacosConfigResponseBodyDataSkipData },
      succCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failData)) {
      $dara.Model.validateArray(this.failData);
    }
    if(Array.isArray(this.skipData)) {
      $dara.Model.validateArray(this.skipData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

