// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDnsGtmMonitorStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: en, zh, and ja. The default value is en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the health check configuration. You can call the [DescribeDnsGtmInstanceAddressPool](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describednsgtminstanceaddresspool) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Monito*****
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * The status to set for the health check. Valid values:
   * 
   * - OPEN: Enables the health check.
   * 
   * - CLOSE: Disables the health check.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      monitorConfigId: 'string',
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

