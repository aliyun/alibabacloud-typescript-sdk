// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTunnelQuotaTimerResponseBodyDataTunnelQuotaParameter } from "./ListTunnelQuotaTimerResponseBodyDataTunnelQuotaParameter";


export class ListTunnelQuotaTimerResponseBodyData extends $dara.Model {
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
   * The time zone property for the time-specific configuration.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The parameters for the time-specific configuration.
   */
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

