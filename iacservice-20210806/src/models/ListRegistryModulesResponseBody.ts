// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistryModulesResponseBodyRegistryModules extends $dara.Model {
  /**
   * @remarks
   * The permission. private: private.
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The creation time in the format of YYYY-MM-DD HH:mm:ss. The returned value does not include a time zone identifier.
   * 
   * @example
   * 2025-06-10 16:16:04
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the Registry module.
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
   * 32
   */
  downloads?: number;
  /**
   * @remarks
   * The name of the Registry module.
   * 
   * @example
   * ModuleName
   */
  moduleName?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * NamespaceName
   */
  namespaceName?: string;
  /**
   * @remarks
   * The provider type. alicloud: Alibaba Cloud.
   * 
   * @example
   * alicloud
   */
  provider?: string;
  /**
   * @remarks
   * The list of accounts with which the Registry module is shared.
   */
  sharedAccounts?: number[];
  /**
   * @remarks
   * The module source.
   * 
   * @example
   * namespaceName/ModuleName
   */
  source?: string;
  /**
   * @remarks
   * The module source URL.
   * 
   * @example
   * URL
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * @example
   * system
   */
  type?: string;
  /**
   * @remarks
   * The latest version number.
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

export class ListRegistryModulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 173
   */
  count?: number;
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. A value of null indicates that no more pages are available.
   * 
   * @example
   * iRdnbADPQp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of Registry modules.
   */
  registryModules?: ListRegistryModulesResponseBodyRegistryModules[];
  /**
   * @remarks
   * The request ID.
   * 
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

