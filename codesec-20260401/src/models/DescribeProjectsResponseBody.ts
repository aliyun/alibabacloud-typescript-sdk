// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectsResponseBodyItemsEnginesSastConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate remediation suggestions.
   */
  remediation?: boolean;
  static names(): { [key: string]: string } {
    return {
      remediation: 'remediation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediation: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectsResponseBodyItemsEnginesScaConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate remediation suggestions.
   */
  remediation?: boolean;
  static names(): { [key: string]: string } {
    return {
      remediation: 'remediation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediation: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectsResponseBodyItemsEngines extends $dara.Model {
  /**
   * @remarks
   * Indicates whether SAST is supported.
   * 
   * @example
   * true
   */
  sast?: boolean;
  /**
   * @remarks
   * The engine-level configuration.
   */
  sastConfig?: DescribeProjectsResponseBodyItemsEnginesSastConfig;
  /**
   * @remarks
   * Indicates whether SCA is supported.
   * 
   * @example
   * true
   */
  sca?: boolean;
  /**
   * @remarks
   * The engine-level configuration.
   */
  scaConfig?: DescribeProjectsResponseBodyItemsEnginesScaConfig;
  static names(): { [key: string]: string } {
    return {
      sast: 'sast',
      sastConfig: 'sastConfig',
      sca: 'sca',
      scaConfig: 'scaConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sast: 'boolean',
      sastConfig: DescribeProjectsResponseBodyItemsEnginesSastConfig,
      sca: 'boolean',
      scaConfig: DescribeProjectsResponseBodyItemsEnginesScaConfig,
    };
  }

  validate() {
    if(this.sastConfig && typeof (this.sastConfig as any).validate === 'function') {
      (this.sastConfig as any).validate();
    }
    if(this.scaConfig && typeof (this.scaConfig as any).validate === 'function') {
      (this.scaConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectsResponseBodyItemsSource extends $dara.Model {
  /**
   * @remarks
   * The project type.
   * 
   * @example
   * manual_upload
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The project configuration version number.
   * 
   * @example
   * 1
   */
  configRevision?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-07-28T03:36:31.573Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The user ID of the project creator.
   * 
   * @example
   * 11111
   */
  createdBy?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 111
   */
  description?: string;
  /**
   * @remarks
   * The engine switches in the project or scan snapshot. Only SAST and SCA are supported.
   */
  engines?: DescribeProjectsResponseBodyItemsEngines;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 934
   */
  id?: number;
  /**
   * @remarks
   * The natural language prompt provided by the user that describes scanning or result processing preferences, such as ignoring low-severity vulnerabilities.
   * 
   * @example
   * 1111
   */
  instructionPrompt?: string;
  /**
   * @remarks
   * The time when a task was last created.
   * 
   * @example
   * 2026-07-28T03:36:31.573Z
   */
  lastScanTime?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * manual-hDecBn
   */
  name?: string;
  /**
   * @remarks
   * The project source.
   */
  source?: DescribeProjectsResponseBodyItemsSource;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-07-28T03:36:31.573Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      configRevision: 'configRevision',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      description: 'description',
      engines: 'engines',
      id: 'id',
      instructionPrompt: 'instructionPrompt',
      lastScanTime: 'lastScanTime',
      name: 'name',
      source: 'source',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRevision: 'number',
      createdAt: 'string',
      createdBy: 'string',
      description: 'string',
      engines: DescribeProjectsResponseBodyItemsEngines,
      id: 'number',
      instructionPrompt: 'string',
      lastScanTime: 'string',
      name: 'string',
      source: DescribeProjectsResponseBodyItemsSource,
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.engines && typeof (this.engines as any).validate === 'function') {
      (this.engines as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of projects.
   */
  items?: DescribeProjectsResponseBodyItems[];
  /**
   * @remarks
   * The page size.
   * 
   * > If this parameter is not specified, all projects are returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. An empty value indicates the last page.
   * 
   * @example
   * eyJ0IjoiMjAyNi0wNy0xNlQwNzo1MzozOC4wMjFaIiwiaSI6MTAwMDQ0OH0
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeProjectsResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

