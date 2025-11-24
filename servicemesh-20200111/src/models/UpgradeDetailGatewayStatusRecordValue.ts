// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDetailGatewayStatusRecordValue extends $dara.Model {
  /**
   * @remarks
   * The upgrade status of the ingress gateway. Valid values:
   * 
   * *   `upgrading`: The ingress gateway is being upgraded.
   * *   `pending`: The ingress gateway waits to be upgraded.
   * *   `finished`: The ingress gateway upgrade is complete.
   * *   `notStart`: The ingress gateway upgrade does not start.
   * *   `failed`: The ingress gateway upgrade fails.
   * *   `unknown`: The upgrade status of the ingress gateway is unknown.
   * 
   * @example
   * upgrading
   */
  status?: string;
  /**
   * @remarks
   * Additional status information of the ingress gateway.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The version of the ingress gateway.
   * 
   * @example
   * 1.9.7
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

