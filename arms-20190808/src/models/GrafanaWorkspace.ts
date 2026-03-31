// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GrafanaWorkspaceTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GrafanaWorkspace extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the workspace is commercialized.
   * 
   * @example
   * true
   */
  commercial?: boolean;
  /**
   * @remarks
   * The deployment mode of Grafana. You can ignore this parameter.
   * 
   * @example
   * asi
   */
  deployType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Grafana for Production
   */
  description?: string;
  /**
   * @remarks
   * The time when the workspace expires.
   * 
   * @example
   * 1652803200000
   */
  endTime?: number;
  /**
   * @remarks
   * The time when the workspace was created.
   * 
   * @example
   * 1642079398000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The version number of Grafana.
   * 
   * Valid values:
   * 
   * *   8.2.x
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   10.0.x
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   9.0.x
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * 9.0.x
   */
  grafanaVersion?: string;
  /**
   * @remarks
   * The domain name of the workspace.
   * 
   * @example
   * my-grafana.grafana.aliyuncs.com:443
   */
  grafanaWorkspaceDomain?: string;
  /**
   * @remarks
   * status of workspace domain
   * 
   * @example
   * on
   */
  grafanaWorkspaceDomainStatus?: string;
  /**
   * @remarks
   * The version.
   * 
   * Valid values:
   * - standard：Standard Edition
   * 
   * - personal_deition：Developer Edition
   * 
   * -  experts_edition：Expert Edition
   * 
   * - advanced_edition：Advanced Edition
   * 
   * @example
   * personal_edition、experts_edition、advanced_edition、standard
   */
  grafanaWorkspaceEdition?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * grafana-cn-4xl3g******
   */
  grafanaWorkspaceId?: string;
  /**
   * @remarks
   * The public IP address and port number.
   * 
   * @example
   * 47.110.71.***:443
   */
  grafanaWorkspaceIp?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * Grafana for Production
   */
  grafanaWorkspaceName?: string;
  /**
   * @remarks
   * The maximum number of accounts.
   * 
   * @example
   * 10
   */
  maxAccount?: string;
  /**
   * @remarks
   * The ID of the purchase order.
   * 
   * @example
   * grafana-cn-4xl3g******
   */
  ntmId?: string;
  /**
   * @remarks
   * The personalized domain name.
   * 
   * @example
   * my-grafana.grafana.aliyuncs.com:443
   */
  personalDomain?: string;
  /**
   * @remarks
   * The prefix of the personalized domain name.
   * 
   * @example
   * my-grafana
   */
  personalDomainPrefix?: string;
  /**
   * @remarks
   * The private domain name of the workspace.
   * 
   * @example
   * my-grafana.grafana.aliyuncs.com:80
   */
  privateDomain?: string;
  /**
   * @remarks
   * The private IP address and port number.
   * 
   * @example
   * 192.168.1.1
   */
  privateIp?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * http、https
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2f4vzrfs6cla
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the migration guide for the shared edition is provided.
   * 
   * @example
   * true
   */
  shareSynced?: boolean;
  /**
   * @remarks
   * The outbound IP address.
   * 
   * @example
   * 47.110.71.***
   */
  snatIp?: string;
  /**
   * @remarks
   * The status of the workspace.
   * 
   * Valid values:
   * 
   * - StartFailed：The workspace failed to be started
   * 
   * - Stop：The workspace is stopped
   * 
   * - Starting：The workspace is being started
   * 
   * - DeleteFailed：The workspace failed to be deleted
   * 
   * - Running：The workspace is running
   * 
   * - DeleteSucceed：The workspace is deleted
   * 
   * @example
   * Starting、Running、Stop、DeleteSucceed
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GrafanaWorkspaceTags[];
  /**
   * @remarks
   * The versions that are available for upgrades.
   */
  upgradeVersion?: string[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1412143830******
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      commercial: 'commercial',
      deployType: 'deployType',
      description: 'description',
      endTime: 'endTime',
      gmtCreate: 'gmtCreate',
      grafanaVersion: 'grafanaVersion',
      grafanaWorkspaceDomain: 'grafanaWorkspaceDomain',
      grafanaWorkspaceDomainStatus: 'grafanaWorkspaceDomainStatus',
      grafanaWorkspaceEdition: 'grafanaWorkspaceEdition',
      grafanaWorkspaceId: 'grafanaWorkspaceId',
      grafanaWorkspaceIp: 'grafanaWorkspaceIp',
      grafanaWorkspaceName: 'grafanaWorkspaceName',
      maxAccount: 'maxAccount',
      ntmId: 'ntmId',
      personalDomain: 'personalDomain',
      personalDomainPrefix: 'personalDomainPrefix',
      privateDomain: 'privateDomain',
      privateIp: 'privateIp',
      protocol: 'protocol',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      shareSynced: 'shareSynced',
      snatIp: 'snatIp',
      status: 'status',
      tags: 'tags',
      upgradeVersion: 'upgradeVersion',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commercial: 'boolean',
      deployType: 'string',
      description: 'string',
      endTime: 'number',
      gmtCreate: 'number',
      grafanaVersion: 'string',
      grafanaWorkspaceDomain: 'string',
      grafanaWorkspaceDomainStatus: 'string',
      grafanaWorkspaceEdition: 'string',
      grafanaWorkspaceId: 'string',
      grafanaWorkspaceIp: 'string',
      grafanaWorkspaceName: 'string',
      maxAccount: 'string',
      ntmId: 'string',
      personalDomain: 'string',
      personalDomainPrefix: 'string',
      privateDomain: 'string',
      privateIp: 'string',
      protocol: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shareSynced: 'boolean',
      snatIp: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GrafanaWorkspaceTags },
      upgradeVersion: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.upgradeVersion)) {
      $dara.Model.validateArray(this.upgradeVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

