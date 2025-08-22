// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDcdnSpecificStagingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration to be deleted. You can specify multiple configuration IDs and separate them with commas (,).
   * 
   * You can call the DescribeDcdnDomainStagingConfig operation to query the environment configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 2317
   */
  configId?: string;
  /**
   * @remarks
   * The accelerated domain name. You can specify only one domain name in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

