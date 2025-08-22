// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenDcdnServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The metering method of DCDN. Valid values:
   * 
   * *   **PayByTraffic**: pay-by-traffic
   * *   **PayByBandwidth**: pay-by-bandwidth
   * 
   * This parameter is required.
   * 
   * @example
   * PayByTraffic
   */
  billType?: string;
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The metering method of WebSocket. Valid values:
   * 
   * *   **websockettraffic**: pay-by-data-transfer
   * *   **websocketbps**: pay-by-bandwidth
   * 
   * This parameter is required.
   * 
   * @example
   * websockettraffic
   */
  websocketBillType?: string;
  static names(): { [key: string]: string } {
    return {
      billType: 'BillType',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      websocketBillType: 'WebsocketBillType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billType: 'string',
      ownerId: 'number',
      securityToken: 'string',
      websocketBillType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

