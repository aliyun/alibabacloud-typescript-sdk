// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CacheClusterCachesets extends $dara.Model {
  name?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CacheClusterConfigurations extends $dara.Model {
  content?: string;
  /**
   * @example
   * cacheset.xml
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CacheClusterResourceSpec extends $dara.Model {
  bandWidth?: number;
  ha?: boolean;
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'bandWidth',
      ha: 'ha',
      storage: 'storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'number',
      ha: 'boolean',
      storage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CacheClusterTables extends $dara.Model {
  catalogId?: string;
  catalogProvider?: string;
  database?: string;
  table?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'catalogId',
      catalogProvider: 'catalogProvider',
      database: 'database',
      table: 'table',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      catalogProvider: 'string',
      database: 'string',
      table: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CacheClusterTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CacheClusterUsedResourceSpec extends $dara.Model {
  bandWidth?: number;
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'bandWidth',
      storage: 'storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'number',
      storage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CacheCluster extends $dara.Model {
  bindedWorkspaces?: string[];
  cacheClusterId?: string;
  cacheClusterName?: string;
  cachesets?: CacheClusterCachesets[];
  clusterId?: string;
  configuration?: string;
  configurations?: CacheClusterConfigurations[];
  createTime?: string;
  creator?: string;
  extra?: string;
  gmtCreated?: number;
  gmtModified?: number;
  modifier?: string;
  name?: string;
  paymentType?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceSpec?: CacheClusterResourceSpec;
  state?: string;
  tables?: CacheClusterTables[];
  tags?: CacheClusterTags[];
  usedResourceSpec?: CacheClusterUsedResourceSpec;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bindedWorkspaces: 'bindedWorkspaces',
      cacheClusterId: 'cacheClusterId',
      cacheClusterName: 'cacheClusterName',
      cachesets: 'cachesets',
      clusterId: 'clusterId',
      configuration: 'configuration',
      configurations: 'configurations',
      createTime: 'createTime',
      creator: 'creator',
      extra: 'extra',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      modifier: 'modifier',
      name: 'name',
      paymentType: 'paymentType',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      resourceSpec: 'resourceSpec',
      state: 'state',
      tables: 'tables',
      tags: 'tags',
      usedResourceSpec: 'usedResourceSpec',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindedWorkspaces: { 'type': 'array', 'itemType': 'string' },
      cacheClusterId: 'string',
      cacheClusterName: 'string',
      cachesets: { 'type': 'array', 'itemType': CacheClusterCachesets },
      clusterId: 'string',
      configuration: 'string',
      configurations: { 'type': 'array', 'itemType': CacheClusterConfigurations },
      createTime: 'string',
      creator: 'string',
      extra: 'string',
      gmtCreated: 'number',
      gmtModified: 'number',
      modifier: 'string',
      name: 'string',
      paymentType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceSpec: CacheClusterResourceSpec,
      state: 'string',
      tables: { 'type': 'array', 'itemType': CacheClusterTables },
      tags: { 'type': 'array', 'itemType': CacheClusterTags },
      usedResourceSpec: CacheClusterUsedResourceSpec,
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindedWorkspaces)) {
      $dara.Model.validateArray(this.bindedWorkspaces);
    }
    if(Array.isArray(this.cachesets)) {
      $dara.Model.validateArray(this.cachesets);
    }
    if(Array.isArray(this.configurations)) {
      $dara.Model.validateArray(this.configurations);
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.usedResourceSpec && typeof (this.usedResourceSpec as any).validate === 'function') {
      (this.usedResourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

