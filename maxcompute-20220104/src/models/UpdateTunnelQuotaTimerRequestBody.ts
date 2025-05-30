// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTunnelQuotaTimerRequestBodyTunnelQuotaParameter } from "./UpdateTunnelQuotaTimerRequestBodyTunnelQuotaParameter";


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

