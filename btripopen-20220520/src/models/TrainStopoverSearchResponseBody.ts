// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainStopoverSearchResponseBodyModule extends $dara.Model {
  arrTime?: string;
  depTime?: string;
  stationName?: string;
  stationNo?: string;
  stationType?: string;
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
  code?: string;
  message?: string;
  module?: TrainStopoverSearchResponseBodyModule[];
  requestId?: string;
  success?: boolean;
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

