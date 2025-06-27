// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDnsGtmMonitorStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the values for specific response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the health check task.
   * 
   * This parameter is required.
   * 
   * @example
   * MonitorConfigId1
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   OPEN: enables the health check feature.
   * *   CLOSE: disables the health check feature.
   * 
   * This parameter is required.
   * 
   * @example
   * open
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

