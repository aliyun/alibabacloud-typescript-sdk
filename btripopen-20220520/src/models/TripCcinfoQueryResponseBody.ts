// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TripCCInfoQueryResponseBodyModule extends $dara.Model {
  notifier?: string;
  notifyStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      notifier: 'notifier',
      notifyStartTime: 'notify_start_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifier: 'string',
      notifyStartTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TripCCInfoQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TripCCInfoQueryResponseBodyModule[];
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
      module: { 'type': 'array', 'itemType': TripCCInfoQueryResponseBodyModule },
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

