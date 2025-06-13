// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckStatRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  byMonth?: boolean;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * P_UNHBH
   */
  parentTaskId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      byMonth: 'ByMonth',
      endDate: 'EndDate',
      parentTaskId: 'ParentTaskId',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byMonth: 'boolean',
      endDate: 'string',
      parentTaskId: 'string',
      regionId: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

