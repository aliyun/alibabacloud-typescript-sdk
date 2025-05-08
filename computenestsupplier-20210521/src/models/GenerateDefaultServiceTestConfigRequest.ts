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
   * service-41ad58439b4b4bf8ae73
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * This parameter is required.
   * 
   * @example
   * draft
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test-1
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

