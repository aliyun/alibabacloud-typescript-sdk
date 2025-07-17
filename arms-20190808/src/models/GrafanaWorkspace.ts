// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GrafanaWorkspaceTags extends $dara.Model {
  key?: string;
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
  commercial?: boolean;
  deployType?: string;
  description?: string;
  /**
   * @example
   * 1652803200000
   */
  endTime?: number;
  /**
   * @example
   * 创建时间
   */
  gmtCreate?: number;
  grafanaVersion?: string;
  grafanaWorkspaceDomain?: string;
  /**
   * @example
   * on
   */
  grafanaWorkspaceDomainStatus?: string;
  /**
   * @example
   * experts_edition/advanced_edition/standard
   */
  grafanaWorkspaceEdition?: string;
  /**
   * @example
   * g-thisisademo666
   */
  grafanaWorkspaceId?: string;
  /**
   * @example
   * 127.0.0.1:3000
   */
  grafanaWorkspaceIp?: string;
  grafanaWorkspaceName?: string;
  /**
   * @example
   * 10
   */
  maxAccount?: string;
  ntmId?: string;
  personalDomain?: string;
  personalDomainPrefix?: string;
  privateDomain?: string;
  privateIp?: string;
  /**
   * @example
   * http/https
   */
  protocol?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  shareSynced?: boolean;
  /**
   * @example
   * 1.1.1.1
   */
  snatIp?: string;
  /**
   * @example
   * Starting/Running/Stop/DeleteSucceed
   */
  status?: string;
  tags?: GrafanaWorkspaceTags[];
  upgradeVersion?: string[];
  /**
   * @example
   * 66666666
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

