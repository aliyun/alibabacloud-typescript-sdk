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

export class UpdateCloudGtmAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The IP address or domain name.
   * 
   * @example
   * 223.5.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The ID of the address. This ID uniquely identifies the address.
   * 
   * This parameter is required.
   * 
   * @example
   * addr-89518218114368**92
   */
  addressId?: string;
  /**
   * @remarks
   * Address Attribution information.
   * 
   * @example
   * This parameter is not supported in the current version and does not need to be input.
   */
  attributeInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can specify a custom value for this parameter, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The new condition for determining the health state of the address. Valid values:
   * 
   * *   any_ok: The health check results of at least one health check template are normal.
   * *   p30_ok: The health check results of at least 30% of health check templates are normal.
   * *   p50_ok: The health check results of at least 50% of health check templates are normal.
   * *   p70_ok: The health check results of at least 70% of health check templates are normal.
   * *   all_ok: The health check results of all health check templates are normal.
   * 
   * @example
   * p50_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The health check tasks.
   */
  healthTasks?: UpdateCloudGtmAddressRequestHealthTasks[];
  /**
   * @remarks
   * The name of the address.
   * 
   * @example
   * Address-1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      address: 'Address',
      addressId: 'AddressId',
      attributeInfo: 'AttributeInfo',
      clientToken: 'ClientToken',
      healthJudgement: 'HealthJudgement',
      healthTasks: 'HealthTasks',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      addressId: 'string',
      attributeInfo: 'string',
      clientToken: 'string',
      healthJudgement: 'string',
      healthTasks: { 'type': 'array', 'itemType': UpdateCloudGtmAddressRequestHealthTasks },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.healthTasks)) {
      $dara.Model.validateArray(this.healthTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

