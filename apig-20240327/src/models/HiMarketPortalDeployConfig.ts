// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketPortalDeployConfigSaeConfig extends $dara.Model {
  /**
   * @remarks
   * The SAE application ID.
   * 
   * @example
   * app-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The SAE namespace ID.
   * 
   * @example
   * cn-hangzhou:default
   */
  namespaceId?: string;
  /**
   * @remarks
   * The OIDC role name used for SAE to access other cloud resources.
   * 
   * @example
   * apig-portal-oidc-role
   */
  oidcRoleName?: string;
  /**
   * @remarks
   * The region ID of SAE.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of instance replicas.
   * 
   * @example
   * 2
   */
  replicas?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-xxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      namespaceId: 'namespaceId',
      oidcRoleName: 'oidcRoleName',
      regionId: 'regionId',
      replicas: 'replicas',
      securityGroupId: 'securityGroupId',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      namespaceId: 'string',
      oidcRoleName: 'string',
      regionId: 'string',
      replicas: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
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

export class HiMarketPortalDeployConfig extends $dara.Model {
  /**
   * @remarks
   * The deployment status message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The deployment platform type.
   * 
   * @example
   * SAE
   */
  platform?: string;
  /**
   * @remarks
   * The SAE (Serverless App Engine) deployment configuration.
   */
  saeConfig?: HiMarketPortalDeployConfigSaeConfig;
  /**
   * @remarks
   * The deployment status.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      platform: 'platform',
      saeConfig: 'saeConfig',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      platform: 'string',
      saeConfig: HiMarketPortalDeployConfigSaeConfig,
      status: 'string',
    };
  }

  validate() {
    if(this.saeConfig && typeof (this.saeConfig as any).validate === 'function') {
      (this.saeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

