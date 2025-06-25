// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyInstanceADAuthServerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn=Manager,dc=test,dc=com
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dc=test,dc=com
   */
  baseDN?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * domain
   */
  domain?: string;
  /**
   * @example
   * (objectClass=top)
   */
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isSSL?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 389
   */
  port?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  server?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  standbyServer?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      baseDN: 'BaseDN',
      domain: 'Domain',
      filter: 'Filter',
      instanceId: 'InstanceId',
      isSSL: 'IsSSL',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      server: 'Server',
      standbyServer: 'StandbyServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      baseDN: 'string',
      domain: 'string',
      filter: 'string',
      instanceId: 'string',
      isSSL: 'string',
      password: 'string',
      port: 'string',
      regionId: 'string',
      server: 'string',
      standbyServer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

