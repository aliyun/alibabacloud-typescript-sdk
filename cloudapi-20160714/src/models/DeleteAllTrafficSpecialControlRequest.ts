// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAllTrafficSpecialControlRequest extends $dara.Model {
  /**
   * @remarks
   * The security token included in the WebSocket request header. The system uses this token to authenticate the request.
   * 
   * @example
   * fa876ffb-caab-4f0a-93b3-3409f2fa5199
   */
  securityToken?: string;
  /**
   * @remarks
   * The ID of the throttling policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tf123456
   */
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      trafficControlId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

