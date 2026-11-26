// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHealthCheckTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the health check template.
   * 
   * @example
   * hct-pno8sisi******
   */
  healthCheckTemplateId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplateId: 'HealthCheckTemplateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplateId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

