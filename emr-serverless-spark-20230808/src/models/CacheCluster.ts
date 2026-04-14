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
  cachesets?: CacheClusterCachesets[];
  clusterId?: string;
  configuration?: string;
  configurations?: CacheClusterConfigurations[];
  creator?: string;
  gmtCreated?: number;
  gmtModified?: number;
  modifier?: string;
  name?: string;
  paymentType?: string;
  regionId?: string;
  resourceSpec?: CacheClusterResourceSpec;
  state?: string;
  usedResourceSpec?: CacheClusterUsedResourceSpec;
  static names(): { [key: string]: string } {
    return {
      bindedWorkspaces: 'bindedWorkspaces',
      cachesets: 'cachesets',
      clusterId: 'clusterId',
      configuration: 'configuration',
      configurations: 'configurations',
      creator: 'creator',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      modifier: 'modifier',
      name: 'name',
      paymentType: 'paymentType',
      regionId: 'regionId',
      resourceSpec: 'resourceSpec',
      state: 'state',
      usedResourceSpec: 'usedResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindedWorkspaces: { 'type': 'array', 'itemType': 'string' },
      cachesets: { 'type': 'array', 'itemType': CacheClusterCachesets },
      clusterId: 'string',
      configuration: 'string',
      configurations: { 'type': 'array', 'itemType': CacheClusterConfigurations },
      creator: 'string',
      gmtCreated: 'number',
      gmtModified: 'number',
      modifier: 'string',
      name: 'string',
      paymentType: 'string',
      regionId: 'string',
      resourceSpec: CacheClusterResourceSpec,
      state: 'string',
      usedResourceSpec: CacheClusterUsedResourceSpec,
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
    if(this.usedResourceSpec && typeof (this.usedResourceSpec as any).validate === 'function') {
      (this.usedResourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

