// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesWithEcsInfoRequestInstanceTag extends $dara.Model {
  /**
   * @example
   * feature_dim_radar_chart
   */
  key?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

