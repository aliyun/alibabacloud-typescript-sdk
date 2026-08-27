// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRiskNotificationResponseBodyData extends $dara.Model {
  /**
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @example
   * false
   */
  isMute?: boolean;
  /**
   * @example
   * GW_VERSION_EXPIRED
   */
  riskCode?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      isMute: 'isMute',
      riskCode: 'riskCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      isMute: 'boolean',
      riskCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskNotificationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetRiskNotificationResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AE1BA0DF-D730-501D-B962-B8B1C23B4667
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRiskNotificationResponseBodyData,
      message: 'string',
      requestId: 'string',
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

