// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmAddressesResponseBodyAddressesAddressHealthTasksHealthTask extends $dara.Model {
  /**
   * @remarks
   * The state of the health check task. Valid values:
   * 
   * *   ok: The task is normal.
   * *   alert: The task has an alert.
   * *   no_data: No data is available. In most cases, the health check task is newly created and no data is collected.
   * 
   * @example
   * ok
   */
  monitorStatus?: string;
  /**
   * @remarks
   * The target service port for health check probes. When the health check protocol is set to Ping, configuration of the service port is not supported.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the health check template associated with the address.
   * 
   * @example
   * mtp-895180524251002880
   */
  templateId?: string;
  /**
   * @remarks
   * Health check template name.
   * 
   * @example
   * IPv4-Ping
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      monitorStatus: 'MonitorStatus',
      port: 'Port',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorStatus: 'string',
      port: 'number',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

