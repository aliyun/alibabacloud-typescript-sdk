// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHealthCheckTemplateAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the health check template.
   * 
   * This parameter is required.
   * 
   * @example
   * hct-x4jazoyi6tvsq9****
   */
  healthCheckTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplateId: 'HealthCheckTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

