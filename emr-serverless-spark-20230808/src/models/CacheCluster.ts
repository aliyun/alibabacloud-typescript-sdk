// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CacheClusterCachesets extends $dara.Model {
  /**
   * @remarks
   * The name of the cache set.
   * 
   * @example
   * cache1
   */
  name?: string;
  /**
   * @remarks
   * The path of the cache set.
   * 
   * @example
   * /path1
   */
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
  /**
   * @remarks
   * The content of the configuration file.
   * 
   * @example
   * <cachesets><cacheset><name>cache1</name><path>/path1</path><cacheStrategy>DISTRIBUTED</cacheStrategy><metaPolicy><type>ALWAYS</type></metaPolicy><readPolicy>CACHE_ASIDE</readPolicy><preadPolicy>ALL_DYNAMIC</preadPolicy><writePolicy>WRITE_THROUGH</writePolicy></cacheset></cachesets>
   */
  content?: string;
  /**
   * @remarks
   * The name of the configuration file.
   * 
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
  /**
   * @remarks
   * The bandwidth.
   * 
   * @example
   * 100
   */
  bandWidth?: number;
  /**
   * @remarks
   * Specifies whether high availability is enabled.
   */
  ha?: boolean;
  /**
   * @remarks
   * The physical storage.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The data catalog ID.
   * 
   * @example
   * 15097**********
   */
  catalogId?: string;
  /**
   * @remarks
   * The data catalog provider.
   * 
   * @example
   * HMS
   */
  catalogProvider?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test_db
   */
  database?: string;
  /**
   * @remarks
   * The data table name.
   * 
   * @example
   * test_table
   */
  table?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-d2d82aa09155****
   */
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
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
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
  /**
   * @remarks
   * The used bandwidth.
   */
  bandWidth?: number;
  /**
   * @remarks
   * The used storage capacity.
   */
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
  /**
   * @remarks
   * The associated workspaces.
   */
  bindedWorkspaces?: string[];
  /**
   * @remarks
   * The cache cluster ID.
   * 
   * @example
   * spc-xxxxxxx
   */
  cacheClusterId?: string;
  /**
   * @remarks
   * The cache cluster name.
   * 
   * @example
   * test-cache-cluster
   */
  cacheClusterName?: string;
  /**
   * @remarks
   * The list of cache sets associated with the cache cluster.
   */
  cachesets?: CacheClusterCachesets[];
  /**
   * @remarks
   * The cache cluster ID.
   * 
   * @example
   * spc-xxxxxxx
   */
  clusterId?: string;
  /**
   * @example
   * [{"name":"cache1","path":"/path1"}]
   */
  configuration?: string;
  /**
   * @remarks
   * The list of configuration files for the cache cluster.
   */
  configurations?: CacheClusterConfigurations[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * Fri May 31 12:18:51 CST 2024
   */
  createTime?: string;
  /**
   * @remarks
   * The creator UID.
   * 
   * @example
   * 123456
   */
  creator?: string;
  extra?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1717138731701
   */
  gmtCreated?: number;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1717138731701
   */
  gmtModified?: number;
  /**
   * @remarks
   * The modifier UID.
   * 
   * @example
   * 123456
   */
  modifier?: string;
  /**
   * @remarks
   * The cache cluster name.
   * 
   * @example
   * test-cache-cluster
   */
  name?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek4f7uj74wdthi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The cache cluster specifications.
   */
  resourceSpec?: CacheClusterResourceSpec;
  /**
   * @remarks
   * The cache cluster status.
   * 
   * @example
   * RUNNING
   */
  state?: string;
  /**
   * @remarks
   * The list of data tables associated with the cache cluster.
   */
  tables?: CacheClusterTables[];
  /**
   * @remarks
   * The list of tags for the cache cluster.
   */
  tags?: CacheClusterTags[];
  /**
   * @remarks
   * The resource specifications used by the cache cluster.
   */
  usedResourceSpec?: CacheClusterUsedResourceSpec;
  /**
   * @remarks
   * The cache cluster version.
   * 
   * @example
   * v2.0
   */
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

