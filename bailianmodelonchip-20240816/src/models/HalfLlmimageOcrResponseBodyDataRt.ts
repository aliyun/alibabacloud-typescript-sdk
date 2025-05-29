// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HalfLLMImageOcrResponseBodyDataRt extends $dara.Model {
  /**
   * @example
   * 635
   */
  firstRt?: number;
  /**
   * @example
   * 8571
   */
  totalRt?: number;
  static names(): { [key: string]: string } {
    return {
      firstRt: 'firstRt',
      totalRt: 'totalRt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstRt: 'number',
      totalRt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

