// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawSkillDetailResponseBodyLatestVersion extends $dara.Model {
  /**
   * @remarks
   * The version changelog.
   * 
   * @example
   * empty
   */
  changelog?: string;
  /**
   * @remarks
   * The version publish timestamp in Unix milliseconds.
   * 
   * @example
   * 1767545394459
   */
  createdAt?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      changelog: 'Changelog',
      createdAt: 'CreatedAt',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changelog: 'string',
      createdAt: 'number',
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

export class DescribePolarClawSkillDetailResponseBodyOwner extends $dara.Model {
  /**
   * @remarks
   * The display name of the author.
   * 
   * @example
   * Peter Steinberger
   */
  displayName?: string;
  /**
   * @remarks
   * The account identifier of the author.
   * 
   * @example
   * steipete
   */
  handle?: string;
  /**
   * @remarks
   * The profile picture URL.
   * 
   * @example
   * https://avatars.githubusercontent.com/u/58493?v=4
   */
  image?: string;
  /**
   * @remarks
   * The user ID of the author.
   * 
   * @example
   * s179zksw999xz8ms4cy7pb2fr183m5jq
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      handle: 'Handle',
      image: 'Image',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      handle: 'string',
      image: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawSkillDetailResponseBodySkillStats extends $dara.Model {
  /**
   * @remarks
   * The number of comments.
   * 
   * @example
   * 6
   */
  comments?: number;
  /**
   * @remarks
   * The number of downloads.
   * 
   * @example
   * 155765
   */
  downloads?: number;
  /**
   * @remarks
   * The total number of installations of all time.
   * 
   * @example
   * 3787
   */
  installsAllTime?: number;
  /**
   * @remarks
   * The current number of installations.
   * 
   * @example
   * 3664
   */
  installsCurrent?: number;
  /**
   * @remarks
   * The number of stars.
   * 
   * @example
   * 404
   */
  stars?: number;
  /**
   * @remarks
   * The number of versions.
   * 
   * @example
   * 1
   */
  versions?: number;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      downloads: 'Downloads',
      installsAllTime: 'InstallsAllTime',
      installsCurrent: 'InstallsCurrent',
      stars: 'Stars',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'number',
      downloads: 'number',
      installsAllTime: 'number',
      installsCurrent: 'number',
      stars: 'number',
      versions: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawSkillDetailResponseBodySkill extends $dara.Model {
  /**
   * @remarks
   * The first publish timestamp in Unix milliseconds.
   * 
   * @example
   * 1767545394459
   */
  createdAt?: number;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Weather
   */
  displayName?: string;
  /**
   * @remarks
   * The Skill identifier.
   * 
   * @example
   * weather
   */
  slug?: string;
  /**
   * @remarks
   * The statistics information.
   */
  stats?: DescribePolarClawSkillDetailResponseBodySkillStats;
  /**
   * @remarks
   * The brief description.
   * 
   * @example
   * Get current weather and forecasts (no API key required).
   */
  summary?: string;
  /**
   * @remarks
   * The tag key-value pairs.
   * 
   * @example
   * {
   *     "latest": "1.0.0"
   * }
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The last update timestamp in Unix milliseconds.
   * 
   * @example
   * 1778485729679
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      displayName: 'DisplayName',
      slug: 'Slug',
      stats: 'Stats',
      summary: 'Summary',
      tags: 'Tags',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      displayName: 'string',
      slug: 'string',
      stats: DescribePolarClawSkillDetailResponseBodySkillStats,
      summary: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updatedAt: 'number',
    };
  }

  validate() {
    if(this.stats && typeof (this.stats as any).validate === 'function') {
      (this.stats as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawSkillDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The latest version information.
   */
  latestVersion?: DescribePolarClawSkillDetailResponseBodyLatestVersion;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The Skill author information.
   */
  owner?: DescribePolarClawSkillDetailResponseBodyOwner;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F45FFACC-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The core information of the Skill.
   */
  skill?: DescribePolarClawSkillDetailResponseBodySkill;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      latestVersion: 'LatestVersion',
      message: 'Message',
      owner: 'Owner',
      requestId: 'RequestId',
      skill: 'Skill',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      latestVersion: DescribePolarClawSkillDetailResponseBodyLatestVersion,
      message: 'string',
      owner: DescribePolarClawSkillDetailResponseBodyOwner,
      requestId: 'string',
      skill: DescribePolarClawSkillDetailResponseBodySkill,
    };
  }

  validate() {
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    if(this.owner && typeof (this.owner as any).validate === 'function') {
      (this.owner as any).validate();
    }
    if(this.skill && typeof (this.skill as any).validate === 'function') {
      (this.skill as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

