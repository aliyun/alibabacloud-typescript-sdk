// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJVSInstanceResponseBodyDataAgentVersion extends $dara.Model {
  upgradeStatus?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      upgradeStatus: 'UpgradeStatus',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      upgradeStatus: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJVSInstanceResponseBodyDataCreditConfig extends $dara.Model {
  /**
   * @remarks
   * The quota limit. Valid values:
   * - 0: not available for use.
   * - >0: the quota is configured based on the numeric value.
   * - -1: unlimited.
   * 
   * @example
   * -1
   */
  creditLimit?: number;
  /**
   * @remarks
   * The quota period. Valid values:
   * - total: The total usage limit.
   * - month: Monthly. The quota resets based on the resource activation time as one cycle.
   * - day: Daily. The quota resets at 00:00.
   * 
   * @example
   * day
   */
  limitPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      creditLimit: 'CreditLimit',
      limitPeriod: 'LimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditLimit: 'number',
      limitPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJVSInstanceResponseBodyDataInstalledSkills extends $dara.Model {
  description?: string;
  iconUrl?: string;
  installedAt?: string;
  skillId?: string;
  skillName?: string;
  skillType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      iconUrl: 'IconUrl',
      installedAt: 'InstalledAt',
      skillId: 'SkillId',
      skillName: 'SkillName',
      skillType: 'SkillType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      iconUrl: 'string',
      installedAt: 'string',
      skillId: 'string',
      skillName: 'string',
      skillType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJVSInstanceResponseBodyDataUsedCredit extends $dara.Model {
  /**
   * @remarks
   * The number of credits.
   * 
   * @example
   * 5
   */
  credit?: number;
  /**
   * @remarks
   * The dimension of the current credit.
   * 
   * @example
   * day
   */
  limitPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      credit: 'Credit',
      limitPeriod: 'LimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credit: 'number',
      limitPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJVSInstanceResponseBodyData extends $dara.Model {
  agentVersion?: DescribeJVSInstanceResponseBodyDataAgentVersion;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-04-10T01:31:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The credit quota configuration. Subsequent quota configurations overwrite previous configurations.
   */
  creditConfig?: DescribeJVSInstanceResponseBodyDataCreditConfig[];
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2026-04-10T01:31:32Z
   */
  expireTime?: string;
  installedSkills?: DescribeJVSInstanceResponseBodyDataInstalledSkills[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * null
   */
  jvsPackageId?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-04-10T01:31:32Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNNING
   */
  status?: string;
  /**
   * @remarks
   * The used credits.
   */
  usedCredit?: DescribeJVSInstanceResponseBodyDataUsedCredit[];
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      createTime: 'CreateTime',
      creditConfig: 'CreditConfig',
      expireTime: 'ExpireTime',
      installedSkills: 'InstalledSkills',
      instanceId: 'InstanceId',
      jvsPackageId: 'JvsPackageId',
      modifyTime: 'ModifyTime',
      status: 'Status',
      usedCredit: 'UsedCredit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: DescribeJVSInstanceResponseBodyDataAgentVersion,
      createTime: 'string',
      creditConfig: { 'type': 'array', 'itemType': DescribeJVSInstanceResponseBodyDataCreditConfig },
      expireTime: 'string',
      installedSkills: { 'type': 'array', 'itemType': DescribeJVSInstanceResponseBodyDataInstalledSkills },
      instanceId: 'string',
      jvsPackageId: 'string',
      modifyTime: 'string',
      status: 'string',
      usedCredit: { 'type': 'array', 'itemType': DescribeJVSInstanceResponseBodyDataUsedCredit },
    };
  }

  validate() {
    if(this.agentVersion && typeof (this.agentVersion as any).validate === 'function') {
      (this.agentVersion as any).validate();
    }
    if(Array.isArray(this.creditConfig)) {
      $dara.Model.validateArray(this.creditConfig);
    }
    if(Array.isArray(this.installedSkills)) {
      $dara.Model.validateArray(this.installedSkills);
    }
    if(Array.isArray(this.usedCredit)) {
      $dara.Model.validateArray(this.usedCredit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJVSInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result object.
   */
  data?: DescribeJVSInstanceResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that indicates the current position from which to start reading. An empty value indicates reading from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  pendingUpgradeCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pendingUpgradeCount: 'PendingUpgradeCount',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeJVSInstanceResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      pendingUpgradeCount: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

