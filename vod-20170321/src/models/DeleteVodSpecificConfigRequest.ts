// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVodSpecificConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2317****
   */
  configId?: string;
  /**
   * @remarks
   * The accelerated domain name for ApsaraVideo VOD.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The environment from which you want to delete the configuration. Valid values:
   * - online: production environment
   * - gray: canary release environment
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

