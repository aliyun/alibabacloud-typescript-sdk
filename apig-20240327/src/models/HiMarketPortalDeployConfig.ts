// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketPortalDeployConfigSaeConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the application in Serverless App Engine.
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the namespace that logically isolates the application.
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the OIDC role that grants permissions to the application.
   */
  oidcRoleName?: string;
  /**
   * @remarks
   * The ID of the region in which to deploy the application.
   */
  regionId?: string;
  /**
   * @remarks
   * The desired number of application replicas.
   */
  replicas?: string;
  /**
   * @remarks
   * The ID of the security group to apply to the application instances. A security group acts as a virtual firewall.
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch within the specified VPC. Serverless App Engine launches application instances in the vSwitch\\"s zone.
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to connect the application to.
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
   * Additional information about the deployment status, such as error details.
   */
  message?: string;
  /**
   * @remarks
   * The target deployment platform. For example, set this to `SAE` to deploy on Serverless App Engine.
   */
  platform?: string;
  /**
   * @remarks
   * Configuration settings for deploying to Serverless App Engine (SAE). This object is required when the `platform` is `SAE`.
   */
  saeConfig?: HiMarketPortalDeployConfigSaeConfig;
  /**
   * @remarks
   * The current status of the deployment. Possible values include `succeeded`, `failed`, and `in_progress`.
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

