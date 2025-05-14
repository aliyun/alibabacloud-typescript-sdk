// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserConfigResponseBodyFreeTier extends $dara.Model {
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 个
   */
  initBaseUnit?: string;
  /**
   * @example
   * 5000
   */
  initBaseValue?: number;
  /**
   * @example
   * 个
   */
  initShowUnit?: string;
  /**
   * @example
   * 5000
   */
  initShowValue?: string;
  /**
   * @example
   * true
   */
  isFreeTierUser?: boolean;
  /**
   * @example
   * 个
   */
  periodBaseUnit?: string;
  /**
   * @example
   * 3000
   */
  periodBaseValue?: number;
  /**
   * @example
   * 个
   */
  periodShowUnit?: string;
  /**
   * @example
   * 3000
   */
  periodShowValue?: string;
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * valid
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      initBaseUnit: 'InitBaseUnit',
      initBaseValue: 'InitBaseValue',
      initShowUnit: 'InitShowUnit',
      initShowValue: 'InitShowValue',
      isFreeTierUser: 'IsFreeTierUser',
      periodBaseUnit: 'PeriodBaseUnit',
      periodBaseValue: 'PeriodBaseValue',
      periodShowUnit: 'PeriodShowUnit',
      periodShowValue: 'PeriodShowValue',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      initBaseUnit: 'string',
      initBaseValue: 'number',
      initShowUnit: 'string',
      initShowValue: 'string',
      isFreeTierUser: 'boolean',
      periodBaseUnit: 'string',
      periodBaseValue: 'number',
      periodShowUnit: 'string',
      periodShowValue: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

