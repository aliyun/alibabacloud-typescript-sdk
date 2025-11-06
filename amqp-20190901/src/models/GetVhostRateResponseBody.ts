// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVhostRateResponseBodyData extends $dara.Model {
  channelNum?: number;
  connectionNum?: number;
  inQps?: number;
  outQps?: number;
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      channelNum: 'ChannelNum',
      connectionNum: 'ConnectionNum',
      inQps: 'InQps',
      outQps: 'OutQps',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelNum: 'number',
      connectionNum: 'number',
      inQps: 'number',
      outQps: 'number',
      vhostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVhostRateResponseBody extends $dara.Model {
  code?: number;
  data?: GetVhostRateResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetVhostRateResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

