// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTunnelQuotaTimerRequestBodyTunnelQuotaParameter extends $dara.Model {
  /**
   * @remarks
   * The number of elastically reserved slots.
   * 
   * @example
   * 100
   */
  elasticReservedSlotNum?: number;
  /**
   * @remarks
   * The number of reserved slots.
   * 
   * @example
   * 100
   */
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

export class UpdateTunnelQuotaTimerRequestBody extends $dara.Model {
  /**
   * @remarks
   * The start time of the time-specific configuration.
   * 
   * @example
   * 00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time of the time-specific configuration.
   * 
   * @example
   * 08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The parameters for the time-specific configuration.
   */
  tunnelQuotaParameter?: UpdateTunnelQuotaTimerRequestBodyTunnelQuotaParameter;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      endTime: 'endTime',
      tunnelQuotaParameter: 'tunnelQuotaParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      tunnelQuotaParameter: UpdateTunnelQuotaTimerRequestBodyTunnelQuotaParameter,
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

export class UpdateTunnelQuotaTimerRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateTunnelQuotaTimerRequestBody[];
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpdateTunnelQuotaTimerRequestBody },
      timezone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

