// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficControlRequest extends $dara.Model {
  /**
   * @remarks
   * The default throttling value for each API.
   * 
   * This parameter is required.
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
   * 436fa39b-b3b9-40c5-ae5d-ce3e000e38c5
   */
  securityToken?: string;
  /**
   * @remarks
   * The name of the throttling policy. The name must be 4 to 50 characters in length and can contain letters, digits, and underscores (_). It cannot start with an underscore.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * MINUTE
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

