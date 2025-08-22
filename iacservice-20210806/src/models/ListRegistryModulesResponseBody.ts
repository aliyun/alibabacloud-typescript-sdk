// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistryModulesResponseBodyRegistryModules extends $dara.Model {
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

export class ListRegistryModulesResponseBody extends $dara.Model {
  /**
   * @example
   * 173
   */
  count?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * LC4NJL3Ru2bIiRdnbADPQp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  registryModules?: ListRegistryModulesResponseBodyRegistryModules[];
  /**
   * @example
   * D25216A9-C0F7-5A3A-A7E4-2B3D4F3A355D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      registryModules: 'registryModules',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      maxResults: 'number',
      nextToken: 'string',
      registryModules: { 'type': 'array', 'itemType': ListRegistryModulesResponseBodyRegistryModules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.registryModules)) {
      $dara.Model.validateArray(this.registryModules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

