// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo extends $dara.Model {
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 1001010
   */
  dmId?: number;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The name of the Logstore where log entries are stored.
   * 
   * @example
   * test
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Log Service project that is used for real-time log delivery.
   * 
   * @example
   * test
   */
  project?: string;
  /**
   * @remarks
   * The ID of the region where the Log Service project is deployed.
   * 
   * @example
   * cn-hangzhou-corp
   */
  region?: string;
  /**
   * @remarks
   * The status of real-time log delivery.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dmId: 'DmId',
      domain: 'Domain',
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dmId: 'number',
      domain: 'string',
      logstore: 'string',
      project: 'string',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

