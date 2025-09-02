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
   * The data timestamp of the baseline instance. Specify the time in the ISO 8601 standard in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-07-07T00:00:00+0800
   */
  bizdate?: string;
  /**
   * @remarks
   * The ID of the scheduling cycle of the baseline instance. For a baseline instance that is scheduled by day, the value of this parameter is 1. For a baseline instance that is scheduled by hour, the value of this parameter ranges from 1 to 24.
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

