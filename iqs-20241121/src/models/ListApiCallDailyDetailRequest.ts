// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiCallDailyDetailRequest extends $dara.Model {
  /**
   * @example
   * CreateVikaApp
   */
  apiName?: string;
  /**
   * @example
   * 20240908
   */
  endTime?: string;
  /**
   * @example
   * PlaceBasic
   */
  engineType?: string;
  /**
   * @example
   * 0
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 20240908
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'apiName',
      endTime: 'endTime',
      engineType: 'engineType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      endTime: 'string',
      engineType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

