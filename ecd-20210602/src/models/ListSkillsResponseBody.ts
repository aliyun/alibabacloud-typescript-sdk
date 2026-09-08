// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsResponseBodySkillsSkillVersions extends $dara.Model {
  changeLog?: string;
  createdAt?: number;
  publishStatus?: string;
  securityScanFailReason?: string;
  securityScanScore?: number;
  securityScanStatus?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      changeLog: 'ChangeLog',
      createdAt: 'CreatedAt',
      publishStatus: 'PublishStatus',
      securityScanFailReason: 'SecurityScanFailReason',
      securityScanScore: 'SecurityScanScore',
      securityScanStatus: 'SecurityScanStatus',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeLog: 'string',
      createdAt: 'number',
      publishStatus: 'string',
      securityScanFailReason: 'string',
      securityScanScore: 'number',
      securityScanStatus: 'string',
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

export class ListSkillsResponseBodySkillsSupportAgentList extends $dara.Model {
  tagId?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillsResponseBodySkills extends $dara.Model {
  /**
   * @remarks
   * The API key of the skill.
   * 
   * @example
   * akm-98f66829***
   */
  apiKey?: string;
  /**
   * @remarks
   * The author.
   * 
   * @example
   * Li***
   */
  author?: string;
  /**
   * @remarks
   * The currently effective version number. If no version is effective, an empty value is returned.
   * 
   * @example
   * 1.0.0
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * This skill is used for****
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * name****
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the skill is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The environment variables.
   */
  envVars?: { [key: string]: string };
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-04-28T10:32:53Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The URL of the skill icon.
   * 
   * @example
   * https://***-***-****
   */
  skillIconUrl?: string;
  /**
   * @remarks
   * The unique identifier of the skill.
   * 
   * @example
   * s-04rj8mzqj1fu****
   */
  skillId?: string;
  /**
   * @remarks
   * The name in the SKILL.md file.
   * 
   * @example
   * name****
   */
  skillName?: string;
  skillVersions?: ListSkillsResponseBodySkillsSkillVersions[];
  /**
   * @remarks
   * The skill slug identifier, which is user-defined and unique within the tenant dimension.
   * 
   * @example
   * find-skills****
   */
  slug?: string;
  /**
   * @remarks
   * The source marketplace code.
   * 
   * @example
   * CLAWHUB
   */
  sourceMarket?: string;
  /**
   * @remarks
   * The source marketplace name.
   * 
   * @example
   * ClawHub
   */
  sourceMarketName?: string;
  /**
   * @remarks
   * The supply type.
   * 
   * @example
   * TENANT
   */
  supplierType?: string;
  supportAgentList?: ListSkillsResponseBodySkillsSupportAgentList[];
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      author: 'Author',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      displayName: 'DisplayName',
      enable: 'Enable',
      envVars: 'EnvVars',
      gmtCreated: 'GmtCreated',
      skillIconUrl: 'SkillIconUrl',
      skillId: 'SkillId',
      skillName: 'SkillName',
      skillVersions: 'SkillVersions',
      slug: 'Slug',
      sourceMarket: 'SourceMarket',
      sourceMarketName: 'SourceMarketName',
      supplierType: 'SupplierType',
      supportAgentList: 'SupportAgentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      author: 'string',
      defaultVersion: 'string',
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      envVars: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreated: 'string',
      skillIconUrl: 'string',
      skillId: 'string',
      skillName: 'string',
      skillVersions: { 'type': 'array', 'itemType': ListSkillsResponseBodySkillsSkillVersions },
      slug: 'string',
      sourceMarket: 'string',
      sourceMarketName: 'string',
      supplierType: 'string',
      supportAgentList: { 'type': 'array', 'itemType': ListSkillsResponseBodySkillsSupportAgentList },
    };
  }

  validate() {
    if(this.envVars) {
      $dara.Model.validateMap(this.envVars);
    }
    if(Array.isArray(this.skillVersions)) {
      $dara.Model.validateArray(this.skillVersions);
    }
    if(Array.isArray(this.supportAgentList)) {
      $dara.Model.validateArray(this.supportAgentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of skill details.
   */
  skills?: ListSkillsResponseBodySkills[];
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      skills: 'Skills',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      skills: { 'type': 'array', 'itemType': ListSkillsResponseBodySkills },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

