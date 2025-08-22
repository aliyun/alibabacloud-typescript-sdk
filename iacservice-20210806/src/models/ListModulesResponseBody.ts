// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModulesResponseBodyModulesGroupInfo extends $dara.Model {
  groupId?: string;
  groupName?: string;
  projectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      groupName: 'groupName',
      projectId: 'projectId',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesResponseBodyModulesTags extends $dara.Model {
  key?: string;
  tagKey?: string;
  tagValue?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      tagKey: 'tagKey',
      tagValue: 'tagValue',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      tagKey: 'string',
      tagValue: 'string',
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

export class ListModulesResponseBodyModules extends $dara.Model {
  /**
   * @example
   * 2022-01-30T02:14:16Z
   */
  createTime?: string;
  /**
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @example
   * description
   */
  description?: string;
  groupInfo?: ListModulesResponseBodyModulesGroupInfo;
  /**
   * @example
   * v1
   */
  latestVersion?: string;
  /**
   * @example
   * mod-518855d9a058cdbd3fd6951d59
   */
  moduleId?: string;
  name?: string;
  /**
   * @example
   * OSS
   */
  source?: string;
  /**
   * @example
   * Created
   */
  status?: string;
  tags?: ListModulesResponseBodyModulesTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      deletionProtection: 'deletionProtection',
      description: 'description',
      groupInfo: 'groupInfo',
      latestVersion: 'latestVersion',
      moduleId: 'moduleId',
      name: 'name',
      source: 'source',
      status: 'status',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      groupInfo: ListModulesResponseBodyModulesGroupInfo,
      latestVersion: 'string',
      moduleId: 'string',
      name: 'string',
      source: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListModulesResponseBodyModulesTags },
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesResponseBody extends $dara.Model {
  modules?: ListModulesResponseBodyModules[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * C617E03B-3DD2-5F0C-A6CF-3028B499A2D5
   */
  requestId?: string;
  /**
   * @example
   * 2790
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      modules: 'modules',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modules: { 'type': 'array', 'itemType': ListModulesResponseBodyModules },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modules)) {
      $dara.Model.validateArray(this.modules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

