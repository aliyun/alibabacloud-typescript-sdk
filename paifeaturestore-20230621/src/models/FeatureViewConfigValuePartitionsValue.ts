// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeatureViewConfigValuePartitionsValue extends $dara.Model {
  /**
   * @remarks
   * Partition value.
   * 
   * @example
   * 20230101
   */
  value?: string;
  /**
   * @remarks
   * List of partitions.
   */
  values?: string[];
  /**
   * @remarks
   * Start time partition.
   * 
   * @example
   * 20230101
   */
  startValue?: string;
  /**
   * @remarks
   * End time partition.
   * 
   * @example
   * 20230202
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

