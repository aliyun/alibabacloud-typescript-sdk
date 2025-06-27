// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmMonitorConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the values of specific response parameters.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the health check configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  monitorConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      monitorConfigId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

