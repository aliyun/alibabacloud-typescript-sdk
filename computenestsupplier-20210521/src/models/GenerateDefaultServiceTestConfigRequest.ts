// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDefaultServiceTestConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-fd1aec438c974828bb7b
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * This parameter is required.
   * 
   * @example
   * beta
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * ECS standalone
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'string',
      serviceVersion: 'string',
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

