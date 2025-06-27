// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasksHealthTask extends $dara.Model {
  /**
   * @remarks
   * The target service port for health checks. When the Ping protocol is selected for health checks, configuration of the service port is not supported.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the health check template.
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
      port: 'Port',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

