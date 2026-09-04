// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSkillsResponseBodySkillInfoInstalledInstances extends $dara.Model {
  /**
   * @remarks
   * The installation status.
   * 
   * @example
   * INSTALLED
   */
  installStatus?: string;
  /**
   * @remarks
   * The cloud phone instance ID.
   * 
   * @example
   * acp-6g3nocu5y9vaf****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      installStatus: 'InstallStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installStatus: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSkillsResponseBodySkillInfo extends $dara.Model {
  /**
   * @remarks
   * The skill category.
   * 
   * @example
   * System
   */
  category?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-03-13 15:40:51
   */
  createTime?: string;
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
   * The OSS download URL of the skill icon.
   * 
   * @example
   * aHR0cDovL2Nsb3VkLXBob25lLWFpLXRlc3QwLm9zcy1jbi1oYW5nemhv****
   */
  iconOssUrl?: string;
  /**
   * @remarks
   * The number of instances that have the skill installed.
   * 
   * @example
   * 10
   */
  installedCount?: number;
  /**
   * @remarks
   * The information about the installed instances.
   */
  installedInstances?: DescribeSkillsResponseBodySkillInfoInstalledInstances[];
  /**
   * @remarks
   * The skill summary.
   * 
   * @example
   * Current weather and forecasts.
   */
  instruction?: string;
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
   * The skill source.
   * 
   * @example
   * USER_UPLOAD
   */
  skillSource?: string;
  /**
   * @remarks
   * The skill lifecycle status.
   * 
   * @example
   * UPLOADED
   */
  skillStatus?: string;
  /**
   * @remarks
   * The source node ID of the skill created from a conversation. This value is empty for user-uploaded skills.
   * 
   * @example
   * acp-bp4du4v74mc7qw8****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The skill status.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The skill type.
   * 
   * @example
   * System
   */
  type?: string;
  /**
   * @remarks
   * The skill version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      description: 'Description',
      iconOssUrl: 'IconOssUrl',
      installedCount: 'InstalledCount',
      installedInstances: 'InstalledInstances',
      instruction: 'Instruction',
      skillId: 'SkillId',
      skillName: 'SkillName',
      skillSource: 'SkillSource',
      skillStatus: 'SkillStatus',
      sourceInstanceId: 'SourceInstanceId',
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      description: 'string',
      iconOssUrl: 'string',
      installedCount: 'number',
      installedInstances: { 'type': 'array', 'itemType': DescribeSkillsResponseBodySkillInfoInstalledInstances },
      instruction: 'string',
      skillId: 'string',
      skillName: 'string',
      skillSource: 'string',
      skillStatus: 'string',
      sourceInstanceId: 'string',
      status: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.installedInstances)) {
      $dara.Model.validateArray(this.installedInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
  requestId?: string;
  /**
   * @remarks
   * The skill information.
   */
  skillInfo?: DescribeSkillsResponseBodySkillInfo[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      skillInfo: 'SkillInfo',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      skillInfo: { 'type': 'array', 'itemType': DescribeSkillsResponseBodySkillInfo },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skillInfo)) {
      $dara.Model.validateArray(this.skillInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

