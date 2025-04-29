// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTrafficControlRequest extends $dara.Model {
  /**
   * @remarks
   * The default throttling value for each API.
   * 
   * @example
   * 10000
   */
  apiDefault?: number;
  /**
   * @remarks
   * The default throttling value for each app.
   * 
   * @example
   * 10000
   */
  appDefault?: number;
  /**
   * @remarks
   * The description of the throttling policy.
   * 
   * @example
   * ThrottlingTestDescription
   */
  description?: string;
  /**
   * @remarks
   * The security token included in the WebSocket request header. The system uses this token to authenticate the request.
   * 
   * @example
   * 4223a10e-eed3-46a6-8b7c-23003f488153
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
  /**
   * @remarks
   * The throttling policy name. The name must be 4 to 50 characters in length and can contain letters, digits, and underscores (_). It cannot start with an underscore.
   * 
   * @example
   * ThrottlingTest
   */
  trafficControlName?: string;
  /**
   * @remarks
   * The unit to be used in the throttling policy. Valid values:
   * 
   * *   **SECOND**
   * *   **MINUTE**
   * *   **HOUR**
   * *   **DAY**
   * 
   * @example
   * HOUR
   */
  trafficControlUnit?: string;
  /**
   * @remarks
   * The default throttling value for each user.
   * 
   * @example
   * 10000
   */
  userDefault?: number;
  static names(): { [key: string]: string } {
    return {
      apiDefault: 'ApiDefault',
      appDefault: 'AppDefault',
      description: 'Description',
      securityToken: 'SecurityToken',
      trafficControlId: 'TrafficControlId',
      trafficControlName: 'TrafficControlName',
      trafficControlUnit: 'TrafficControlUnit',
      userDefault: 'UserDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDefault: 'number',
      appDefault: 'number',
      description: 'string',
      securityToken: 'string',
      trafficControlId: 'string',
      trafficControlName: 'string',
      trafficControlUnit: 'string',
      userDefault: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

