// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVodSpecificConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 2317****
   */
  configId?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The environment from which the domain name configurations are deleted. Valid values:
   * 
   * *   online: production environment
   * *   gray: simulation environment
   * 
   * @example
   * online
   */
  env?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      env: 'Env',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      domainName: 'string',
      env: 'string',
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

