// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetGtmMonitorStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The health check configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * abc1234
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * The enabling status. Valid values:
   * 
   * - **OPEN**: Enable
   * 
   * - **CLOSE**: Disable
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

