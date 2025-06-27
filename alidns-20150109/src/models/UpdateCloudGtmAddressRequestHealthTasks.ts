// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressRequestHealthTasks extends $dara.Model {
  /**
   * @remarks
   * The service port of the address on which health check tasks are performed. If the ping protocol is used for health checks, the configuration of the service port is not supported.
   * 
   * *   If you leave this parameter empty, the existing service port is deleted.
   * *   If you specify this parameter, the existing service port is updated based on the value of this parameter.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the health check template that is associated with the address. This parameter is required if you specify a service port of the address for health check tasks.
   * 
   * *   If you leave this parameter empty, the associated health check template is disassociated from the address.
   * *   If you specify this parameter, the associated health check template is updated based on the value of this parameter.
   * 
   * @example
   * mtp-89518052425100**80
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

