// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOceanBaseDataSourceRequest extends $dara.Model {
  /**
   * @example
   * cluster_name
   */
  cluster?: string;
  /**
   * @example
   * http://xxx.xxx.xxx.2:2883/services?Action=ObRootServiceInfo&User_ID=alibaba&UID=ocpmaster&ObRegion=ob_1***29.admin
   */
  configUrl?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * pas***
   */
  drcPassword?: string;
  /**
   * @example
   * user_na***
   */
  drcUserName?: string;
  /**
   * @example
   * in***
   */
  innerDrcPassword?: string;
  /**
   * @example
   * xxx.xxx.xxx.1
   */
  ip?: string;
  /**
   * @remarks
   * LogProxy IP。
   * 
   * @example
   * null
   */
  logProxyIp?: string;
  /**
   * @example
   * null
   */
  logProxyPort?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * source_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pass_word
   */
  password?: string;
  /**
   * @example
   * 2883
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tenant_name
   */
  tenant?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OB_MYSQL_VPC
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_name
   */
  userName?: string;
  /**
   * @example
   * vpc-bp1d2q3mhg9i23ofi****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      configUrl: 'ConfigUrl',
      description: 'Description',
      drcPassword: 'DrcPassword',
      drcUserName: 'DrcUserName',
      innerDrcPassword: 'InnerDrcPassword',
      ip: 'Ip',
      logProxyIp: 'LogProxyIp',
      logProxyPort: 'LogProxyPort',
      name: 'Name',
      password: 'Password',
      port: 'Port',
      tenant: 'Tenant',
      type: 'Type',
      userName: 'UserName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      configUrl: 'string',
      description: 'string',
      drcPassword: 'string',
      drcUserName: 'string',
      innerDrcPassword: 'string',
      ip: 'string',
      logProxyIp: 'string',
      logProxyPort: 'string',
      name: 'string',
      password: 'string',
      port: 'number',
      tenant: 'string',
      type: 'string',
      userName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

