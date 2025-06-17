// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetReqHeaderConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * 123
   */
  configId?: number;
  /**
   * @remarks
   * The accelerated domain name. Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the custom header.
   * 
   * This parameter is required.
   * 
   * @example
   * testkey
   */
  key?: string;
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The value of the custom header.
   * 
   * This parameter is required.
   * 
   * @example
   * testvalue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      key: 'Key',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      domainName: 'string',
      key: 'string',
      ownerId: 'number',
      securityToken: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

