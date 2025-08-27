// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainStopoverSearchResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  arrTime?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  depTime?: string;
  stationName?: string;
  /**
   * @example
   * 0
   */
  stationNo?: string;
  /**
   * @example
   * 0
   */
  stationType?: string;
  /**
   * @example
   * 22
   */
  stopOverTime?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      depTime: 'dep_time',
      stationName: 'station_name',
      stationNo: 'station_no',
      stationType: 'station_type',
      stopOverTime: 'stop_over_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      depTime: 'string',
      stationName: 'string',
      stationNo: 'string',
      stationType: 'string',
      stopOverTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainStopoverSearchResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: TrainStopoverSearchResponseBodyModule[];
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': TrainStopoverSearchResponseBodyModule },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

