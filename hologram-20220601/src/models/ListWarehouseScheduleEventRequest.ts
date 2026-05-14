// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarehouseScheduleEventRequest extends $dara.Model {
  /**
   * @example
   * timed
   */
  elasticType?: string;
  /**
   * @example
   * 1777516201
   */
  endTime?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
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

