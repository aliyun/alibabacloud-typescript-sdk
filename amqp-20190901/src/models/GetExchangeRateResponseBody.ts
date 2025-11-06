// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExchangeRateResponseBodyDataExchangeQuotaVO extends $dara.Model {
  exchangeName?: string;
  inQps?: number;
  instanceId?: string;
  outQps?: number;
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      exchangeName: 'ExchangeName',
      inQps: 'InQps',
      instanceId: 'InstanceId',
      outQps: 'OutQps',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchangeName: 'string',
      inQps: 'number',
      instanceId: 'string',
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

export class GetExchangeRateResponseBodyData extends $dara.Model {
  exchangeQuotaVO?: GetExchangeRateResponseBodyDataExchangeQuotaVO[];
  static names(): { [key: string]: string } {
    return {
      exchangeQuotaVO: 'ExchangeQuotaVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchangeQuotaVO: { 'type': 'array', 'itemType': GetExchangeRateResponseBodyDataExchangeQuotaVO },
    };
  }

  validate() {
    if(Array.isArray(this.exchangeQuotaVO)) {
      $dara.Model.validateArray(this.exchangeQuotaVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExchangeRateResponseBody extends $dara.Model {
  code?: number;
  data?: GetExchangeRateResponseBodyData;
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
      data: GetExchangeRateResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

