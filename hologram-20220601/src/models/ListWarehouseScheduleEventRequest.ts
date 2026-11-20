// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarehouseScheduleEventRequest extends $dara.Model {
  /**
   * @remarks
   * The elastic scaling type, including time-based scaling and auto scaling. By default, all types are returned.
   * 
   * @example
   * timed
   */
  elasticType?: string;
  /**
   * @remarks
   * The end timestamp. Default value: current time. Unit: seconds.
   * 
   * @example
   * 1777516201
   */
  endTime?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 30. Maximum value: 100.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The start timestamp. Default value: three days ago. Unit: seconds.
   * 
   * @example
   * 1777257001
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      elasticType: 'elasticType',
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticType: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

