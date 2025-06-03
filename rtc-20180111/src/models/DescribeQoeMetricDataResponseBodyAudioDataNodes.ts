// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQoeMetricDataResponseBodyAudioDataNodes extends $dara.Model {
  /**
   * @example
   * 1548670256
   */
  x?: string;
  /**
   * @example
   * 123
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

