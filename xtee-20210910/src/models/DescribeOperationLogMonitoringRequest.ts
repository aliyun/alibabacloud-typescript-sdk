// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOperationLogMonitoringRequest extends $dara.Model {
  /**
   * @remarks
   * Language type of the returned message. Values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * End date (in yyyy-MM-dd format, and the interval from the start date cannot exceed 90 days)
   * 
   * @example
   * 2025-07-30
   */
  endDate?: string;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Start date (in yyyy-MM-dd format, and the interval from the current date cannot exceed 90 days)
   * 
   * @example
   * 2025-07-19
   */
  startDate?: string;
  /**
   * @remarks
   * Operator.
   * 
   * @example
   * root
   */
  userNameSearch?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      endDate: 'endDate',
      regId: 'regId',
      startDate: 'startDate',
      userNameSearch: 'userNameSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      endDate: 'string',
      regId: 'string',
      startDate: 'string',
      userNameSearch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

