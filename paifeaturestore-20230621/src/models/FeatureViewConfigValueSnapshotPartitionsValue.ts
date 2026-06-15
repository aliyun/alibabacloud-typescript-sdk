// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeatureViewConfigValueSnapshotPartitionsValue extends $dara.Model {
  /**
   * @remarks
   * The partition value.
   * 
   * @example
   * 20260101
   */
  value?: string;
  /**
   * @remarks
   * An array of partition values.
   */
  values?: string[];
  /**
   * @remarks
   * The start value of the partition range.
   */
  startValue?: string;
  /**
   * @remarks
   * The end value of the partition range.
   */
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

