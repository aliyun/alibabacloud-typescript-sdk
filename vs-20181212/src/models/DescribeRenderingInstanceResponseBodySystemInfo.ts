// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingInstanceResponseBodySystemInfo extends $dara.Model {
  /**
   * @example
   * 60
   */
  frequency?: number;
  /**
   * @example
   * 1920*1080
   */
  resolution?: string;
  static names(): { [key: string]: string } {
    return {
      frequency: 'Frequency',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frequency: 'number',
      resolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

