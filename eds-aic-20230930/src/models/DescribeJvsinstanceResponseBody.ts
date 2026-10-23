// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJVSInstanceResponseBodyDataAgentVersion extends $dara.Model {
  /**
   * @remarks
   * The AI Engine version upgrade status.
   */
  upgradeStatus?: string;
  /**
   * @remarks
   * The AI Engine version number.
   * 
   * @example
   * 2607W1
   */
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
   * The credit limit.
   * 
   * @example
   * -1
   */
  creditLimit?: number;
  /**
   * @remarks
   * The limit period.
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
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * Current weather and forecasts with wttr.in via curl for locations, rain, temperature, travel planning.
   */
  description?: string;
  /**
   * @remarks
   * The skill icon URL.
   * 
   * @example
   * https://www.example.com/icon.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The skill installation time.
   */
  installedAt?: string;
  /**
   * @remarks
   * The skill ID.
   * 
   * @example
   * s-04zzrgosj6xd1****
   */
  skillId?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * weather
   */
  skillName?: string;
  /**
   * @remarks
   * The skill type.
   * 
   * @example
   * System
   */
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
  /**
   * @remarks
   * The AI Engine version and upgrade status.
   */
  agentVersion?: DescribeJVSInstanceResponseBodyDataAgentVersion;
  /**
   * @remarks
   * The creation time. The time is in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2026-04-10T01:31:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The credit limit configuration. If multiple configurations are delivered, the subsequent configurations overwrite the previous ones.
   */
  creditConfig?: DescribeJVSInstanceResponseBodyDataCreditConfig[];
  /**
   * @remarks
   * The expiration time. The time is in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2026-04-10T01:31:32Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The list of skills installed on the instance.
   */
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
   * The modification time. The time is in UTC and follows the ISO 8601 standard.
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
   * The maximum number of results returned in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that indicates the starting position of the current query. If this parameter is empty, the query starts from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of pending upgrades.
   * 
   * @example
   * 0
   */
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

