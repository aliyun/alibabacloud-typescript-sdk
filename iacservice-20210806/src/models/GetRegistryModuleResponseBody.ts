// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegistryModuleResponseBodyRegistryModule extends $dara.Model {
  /**
   * @remarks
   * The permissions. Valid values:
   * - private: Private.
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The creation time in the YYYY-MM-DD HH:mm:ss format. The returned value does not include a time zone identifier.
   * 
   * @example
   * 2025-05-28 13:39:05
   */
  createTime?: string;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The number of downloads.
   * 
   * @example
   * 23
   */
  downloads?: number;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * ecs-cluster
   */
  moduleName?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * NamespaceName
   */
  namespaceName?: string;
  /**
   * @remarks
   * The provider type. Valid values:
   * - alicloud: Alibaba Cloud.
   * 
   * @example
   * alicloud
   */
  provider?: string;
  /**
   * @remarks
   * The list of accounts that share the Registry template.
   */
  sharedAccounts?: number[];
  /**
   * @remarks
   * The template source, which is concatenated in the <NamespaceName>/<ModuleName> format.
   * 
   * @example
   * namespaceName/ModuleName
   */
  source?: string;
  /**
   * @remarks
   * The URL of the template source.
   * 
   * @example
   * URL
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The workspace type. Valid values:
   * 
   * - system: Public module.
   * 
   * - self: Custom module.
   * 
   * - shared: Shared module.
   * 
   * - community: Community module.
   * 
   * @example
   * system
   */
  type?: string;
  /**
   * @remarks
   * The latest version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      createTime: 'createTime',
      description: 'description',
      downloads: 'downloads',
      moduleName: 'moduleName',
      namespaceName: 'namespaceName',
      provider: 'provider',
      sharedAccounts: 'sharedAccounts',
      source: 'source',
      sourceUrl: 'sourceUrl',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      createTime: 'string',
      description: 'string',
      downloads: 'number',
      moduleName: 'string',
      namespaceName: 'string',
      provider: 'string',
      sharedAccounts: { 'type': 'array', 'itemType': 'number' },
      source: 'string',
      sourceUrl: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sharedAccounts)) {
      $dara.Model.validateArray(this.sharedAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegistryModuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Registry template.
   */
  registryModule?: GetRegistryModuleResponseBodyRegistryModule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B5AD471-5036-581B-AC9B-7D5EECED877A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registryModule: 'registryModule',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registryModule: GetRegistryModuleResponseBodyRegistryModule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.registryModule && typeof (this.registryModule as any).validate === 'function') {
      (this.registryModule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

