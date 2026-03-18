// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTunnelQuotaTimerResponseBodyDataTunnelQuotaParameter extends $dara.Model {
  elasticReservedSlotNum?: number;
  slotNum?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedSlotNum: 'elasticReservedSlotNum',
      slotNum: 'slotNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedSlotNum: 'number',
      slotNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTunnelQuotaTimerResponseBodyData extends $dara.Model {
  beginTime?: string;
  endTime?: string;
  timezone?: string;
  tunnelQuotaParameter?: ListTunnelQuotaTimerResponseBodyDataTunnelQuotaParameter;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      endTime: 'endTime',
      timezone: 'timezone',
      tunnelQuotaParameter: 'tunnelQuotaParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      timezone: 'string',
      tunnelQuotaParameter: ListTunnelQuotaTimerResponseBodyDataTunnelQuotaParameter,
    };
  }

  validate() {
    if(this.tunnelQuotaParameter && typeof (this.tunnelQuotaParameter as any).validate === 'function') {
      (this.tunnelQuotaParameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTunnelQuotaTimerResponseBody extends $dara.Model {
  data?: ListTunnelQuotaTimerResponseBodyData[];
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTunnelQuotaTimerResponseBodyData },
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
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

