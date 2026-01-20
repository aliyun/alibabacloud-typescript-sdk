// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeatureViewConfigValueSnapshotPartitionsValue extends $dara.Model {
  /**
   * @example
   * 20260101
   */
  value?: string;
  values?: string[];
  startValue?: string;
  endValue?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      values: 'Values',
      startValue: 'StartValue',
      endValue: 'EndValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
      startValue: 'string',
      endValue: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

