// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTrafficSpecialControlRequest extends $dara.Model {
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
   * The ID of the app or Alibaba Cloud account. Specify this parameter based on the value of the **SpecialType** parameter. You can view your account ID on the [Account Management](https://account.console.aliyun.com/?spm=a2c4g.11186623.2.15.3f053654YpMPwo#/secure) page.
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
   * The ID of the specified throttling policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tf123456
   */
  trafficControlId?: string;
  /**
   * @remarks
   * The special throttling value.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  trafficValue?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      specialKey: 'SpecialKey',
      specialType: 'SpecialType',
      trafficControlId: 'TrafficControlId',
      trafficValue: 'TrafficValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      specialKey: 'string',
      specialType: 'string',
      trafficControlId: 'string',
      trafficValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

