// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
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
   * Indicates whether SCA is supported.
   * 
   * @example
   * true
   */
  sca?: boolean;
  static names(): { [key: string]: string } {
    return {
      sast: 'sast',
      sca: 'sca',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sast: 'boolean',
      sca: 'boolean',
    };
  }

  validate() {
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
   * The engine switches for the project or scan snapshot (SAST and SCA only).
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
   * The natural language prompt provided by the user that describes scanning or result processing preferences, such as ignoring low-risk vulnerabilities.
   * 
   * @example
   * 1111
   */
  instructionPrompt?: string;
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
   * > If not specified, all projects are displayed.
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
   * Id of the request
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

