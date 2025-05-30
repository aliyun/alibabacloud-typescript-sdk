// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTunnelQuotaTimerRequestBody } from "./UpdateTunnelQuotaTimerRequestBody";


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

