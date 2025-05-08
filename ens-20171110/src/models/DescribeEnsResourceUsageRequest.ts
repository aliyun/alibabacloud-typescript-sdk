// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsResourceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Format: yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2018-06-15T09:07:23Z
   */
  expiredEndTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Format: yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2018-06-15T09:07:23Z
   */
  expiredStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      expiredEndTime: 'ExpiredEndTime',
      expiredStartTime: 'ExpiredStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredEndTime: 'string',
      expiredStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

