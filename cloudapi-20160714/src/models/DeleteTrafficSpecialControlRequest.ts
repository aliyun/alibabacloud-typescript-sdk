// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTrafficSpecialControlRequest extends $dara.Model {
  /**
   * @remarks
   * The security token included in the WebSocket request header. The system uses this token to authenticate the request.
   * 
   * @example
   * 7c51b234-48d3-44e1-9b36-e2ddccc738e3
   */
  securityToken?: string;
  /**
   * @remarks
   * The ID of the app or Alibaba Cloud account. You can view your account ID on the [Account Management](https://account.console.aliyun.com/?spm=a2c4g.11186623.2.15.343130a8sDi8cO#/secure) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 3382463
   */
  specialKey?: string;
  /**
   * @remarks
   * The type of the special throttling policy. Valid values:
   * 
   * *   **APP**
   * *   **USER**
   * 
   * This parameter is required.
   * 
   * @example
   * APP
   */
  specialType?: string;
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
      specialKey: 'SpecialKey',
      specialType: 'SpecialType',
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      specialKey: 'string',
      specialType: 'string',
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

