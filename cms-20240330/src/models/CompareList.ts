// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aggregate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  threshold?: number;
  yoyTimeUnit?: string;
  yoyTimeValue?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      operator: 'operator',
      threshold: 'threshold',
      yoyTimeUnit: 'yoyTimeUnit',
      yoyTimeValue: 'yoyTimeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      operator: 'string',
      threshold: 'number',
      yoyTimeUnit: 'string',
      yoyTimeValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

