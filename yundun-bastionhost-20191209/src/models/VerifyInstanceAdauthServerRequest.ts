// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyInstanceADAuthServerRequest extends $dara.Model {
  /**
   * @remarks
   * The account of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn=Manager,dc=test,dc=com
   */
  account?: string;
  /**
   * @remarks
   * The Base DN.
   * 
   * This parameter is required.
   * 
   * @example
   * dc=test,dc=com
   */
  baseDN?: string;
  /**
   * @remarks
   * The domain on the Active Directory server.
   * 
   * This parameter is required.
   * 
   * @example
   * domain
   */
  domain?: string;
  /**
   * @remarks
   * The filter condition for users.
   * 
   * @example
   * (objectClass=top)
   */
  filter?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether SSL is supported. Valid values:
   * 
   * - **true**: supported
   * 
   * - **false**: not supported
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isSSL?: string;
  /**
   * @remarks
   * The password of the server account.
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * The port.
   * 
   * This parameter is required.
   * 
   * @example
   * 389
   */
  port?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance. For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The address of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  server?: string;
  /**
   * @remarks
   * The address of the standby server.
   * 
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

