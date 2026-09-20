// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaselineStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The business date in UTC format (yyyy-MM-dd\\"T\\"HH:mm:ssZ).
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-07-07T00:00:00+0800
   */
  bizdate?: string;
  /**
   * @remarks
   * The cycle number of the baseline instance. The value is 1 for daily baselines. The value ranges from [1,24\\] for hourly baselines.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  inGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      bizdate: 'string',
      inGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

