// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportOssCheckStatRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  byMonth?: boolean;
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  /**
   * @example
   * P_UX0K5X
   */
  parentTaskId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 2024-03-10 10:00:00
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

