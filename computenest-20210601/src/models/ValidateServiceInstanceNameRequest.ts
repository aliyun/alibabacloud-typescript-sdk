// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateServiceInstanceNameRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique token for each request. The **ClientToken** supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether the service instance is a trial instance.
   * 
   * @example
   * false
   */
  isTrial?: boolean;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-12xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  serviceInstanceName?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The name of the template. Specify this parameter if the service supports multiple templates.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      isTrial: 'IsTrial',
      serviceId: 'ServiceId',
      serviceInstanceName: 'ServiceInstanceName',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      isTrial: 'boolean',
      serviceId: 'string',
      serviceInstanceName: 'string',
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

