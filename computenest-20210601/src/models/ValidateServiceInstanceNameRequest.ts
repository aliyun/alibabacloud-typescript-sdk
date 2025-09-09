// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateServiceInstanceNameRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  isTrial?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * service-12xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testName
   */
  serviceInstanceName?: string;
  /**
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @example
   * 模板一
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

