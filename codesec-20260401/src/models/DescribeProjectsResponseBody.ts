// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeProjectsResponseBodyItemsEngines extends $dara.Model {
  sast?: boolean;
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
  configRevision?: number;
  /**
   * @remarks
   * 扫描项目创建时间（RFC3339）
   */
  createdAt?: string;
  createdBy?: string;
  description?: string;
  engines?: DescribeProjectsResponseBodyItemsEngines;
  id?: number;
  instructionPrompt?: string;
  name?: string;
  source?: DescribeProjectsResponseBodyItemsSource;
  /**
   * @remarks
   * 扫描项目更新时间（RFC3339）
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
  items?: DescribeProjectsResponseBodyItems[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
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

