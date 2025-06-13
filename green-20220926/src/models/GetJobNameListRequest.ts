// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobNameListRequest extends $dara.Model {
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      query: 'Query',
      regionId: 'RegionId',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      query: 'string',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  validate() {
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

