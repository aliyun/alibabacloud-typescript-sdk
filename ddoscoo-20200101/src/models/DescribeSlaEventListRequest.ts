// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlaEventListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  ip?: string;
  page?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  region?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      page: 'Page',
      pageSize: 'PageSize',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
      page: 'number',
      pageSize: 'number',
      region: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

