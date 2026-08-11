// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModulesResponseBodyModulesGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g-kw1a58tb5m2j7rpsa6j25
   */
  groupId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * groupName
   */
  groupName?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-fu1a50tjdaff2lppddqsm
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * projectName
   */
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
  /**
   * @remarks
   * The tag key of the template.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag key of the template.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the template.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  /**
   * @remarks
   * The tag value of the template.
   * 
   * @example
   * TestValue
   */
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
   * @remarks
   * The creation time in UTC, in the ISO 8601 format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2022-01-30T02:14:16Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. When the template is associated with a task, deletion protection is enabled and the template cannot be deleted.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * The group information.
   */
  groupInfo?: ListModulesResponseBodyModulesGroupInfo;
  /**
   * @remarks
   * The latest version number.
   * 
   * @example
   * v1
   */
  latestVersion?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * mod-518855d9a058cdbd3fd6951d59
   */
  moduleId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * ModuleName
   */
  name?: string;
  /**
   * @remarks
   * The template source. Valid values:
   * 
   * - OSS: imported from OSS.
   * - Registry: created from a template in the template center.
   * - ExportTask: exported from a resource export task.
   * - Upload: uploaded as a file.
   * - Shared: cloned from a shared template.
   * - Editor: created using the online editor.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The template status. Valid values:
   * 
   * - Creating: the template is being created.
   * - Created: the template has been created. A version can be published after the template is created.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The list of template tags.
   */
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
  /**
   * @remarks
   * The list of templates.
   */
  modules?: ListModulesResponseBodyModules[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C617E03B-3DD2-5F0C-A6CF-3028B499A2D5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
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

