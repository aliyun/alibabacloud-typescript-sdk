// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegistryModuleResponseBodyRegistryModule extends $dara.Model {
  acl?: string;
  createTime?: string;
  description?: string;
  downloads?: number;
  moduleName?: string;
  namespaceName?: string;
  provider?: string;
  sharedAccounts?: number[];
  source?: string;
  sourceUrl?: string;
  type?: string;
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
  registryModule?: GetRegistryModuleResponseBodyRegistryModule;
  /**
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

