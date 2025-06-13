// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCipStatsResponseBodyDataLabelStatChartTreeChart extends $dara.Model {
  description?: string;
  /**
   * @example
   * nickNameDetection
   */
  name?: string;
  /**
   * @example
   * 99.91
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

