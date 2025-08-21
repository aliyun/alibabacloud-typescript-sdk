// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAndDoVoipCallForHotelResponseBodyResultDeviceTargetsData extends $dara.Model {
  deviceIcon?: string;
  deviceName?: string;
  deviceType?: string;
  online?: boolean;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIcon: 'DeviceIcon',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      online: 'Online',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIcon: 'string',
      deviceName: 'string',
      deviceType: 'string',
      online: 'boolean',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelResponseBodyResultDeviceTargets extends $dara.Model {
  code?: number;
  data?: CheckAndDoVoipCallForHotelResponseBodyResultDeviceTargetsData[];
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': CheckAndDoVoipCallForHotelResponseBodyResultDeviceTargetsData },
      msg: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelResponseBodyResultStartCallResult extends $dara.Model {
  message?: string;
  retCode?: number;
  retValue?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      retCode: 'RetCode',
      retValue: 'RetValue',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      retCode: 'number',
      retValue: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelResponseBodyResult extends $dara.Model {
  deviceTargets?: CheckAndDoVoipCallForHotelResponseBodyResultDeviceTargets;
  isStartCall?: boolean;
  passed?: boolean;
  startCallResult?: CheckAndDoVoipCallForHotelResponseBodyResultStartCallResult;
  static names(): { [key: string]: string } {
    return {
      deviceTargets: 'DeviceTargets',
      isStartCall: 'IsStartCall',
      passed: 'Passed',
      startCallResult: 'StartCallResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTargets: CheckAndDoVoipCallForHotelResponseBodyResultDeviceTargets,
      isStartCall: 'boolean',
      passed: 'boolean',
      startCallResult: CheckAndDoVoipCallForHotelResponseBodyResultStartCallResult,
    };
  }

  validate() {
    if(this.deviceTargets && typeof (this.deviceTargets as any).validate === 'function') {
      (this.deviceTargets as any).validate();
    }
    if(this.startCallResult && typeof (this.startCallResult as any).validate === 'function') {
      (this.startCallResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAndDoVoipCallForHotelResponseBody extends $dara.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: CheckAndDoVoipCallForHotelResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: CheckAndDoVoipCallForHotelResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

