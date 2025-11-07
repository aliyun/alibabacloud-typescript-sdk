// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaStatisticsListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MOBILE_ONLINE_LENGTH
   */
  api?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1750694399999
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1760112000000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      endDate: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

