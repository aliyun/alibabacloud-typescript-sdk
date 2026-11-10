// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistryModuleVersionsResponseBodyModuleVersions extends $dara.Model {
  /**
   * @remarks
   * The creation time. The format is YYYY-MM-DD HH:mm:ss. The returned value does not include a time zone identifier.
   * 
   * @example
   * 2025-05-28 11:15:57
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * ModuleName
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
   * The provider type. Valid value: alicloud: Alibaba Cloud.
   * 
   * @example
   * alicloud
   */
  provider?: string;
  /**
   * @remarks
   * The template source. Format: namespaceName/ModuleName.
   * 
   * @example
   * test_namespace/RegistryModule-test0e
   */
  source?: string;
  /**
   * @remarks
   * The source URL of the template.
   * 
   * @example
   * URL
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      moduleName: 'moduleName',
      namespaceName: 'namespaceName',
      provider: 'provider',
      source: 'source',
      sourceUrl: 'sourceUrl',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      moduleName: 'string',
      namespaceName: 'string',
      provider: 'string',
      source: 'string',
      sourceUrl: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistryModuleVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 21
   */
  count?: number;
  /**
   * @remarks
   * The number of entries to return per page for paging in a paged query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of template versions.
   */
  moduleVersions?: ListRegistryModuleVersionsResponseBodyModuleVersions[];
  /**
   * @remarks
   * The pagination token. Set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * IbuvZ8iOH447bhHWDavGTOMijI2Jep7c=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8606B880-3485-54E2-89E1-43361C468C85
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      maxResults: 'maxResults',
      moduleVersions: 'moduleVersions',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      maxResults: 'number',
      moduleVersions: { 'type': 'array', 'itemType': ListRegistryModuleVersionsResponseBodyModuleVersions },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.moduleVersions)) {
      $dara.Model.validateArray(this.moduleVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

