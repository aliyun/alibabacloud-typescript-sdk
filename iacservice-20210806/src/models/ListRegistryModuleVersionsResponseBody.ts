// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistryModuleVersionsResponseBodyModuleVersions extends $dara.Model {
  createTime?: string;
  moduleName?: string;
  namespaceName?: string;
  provider?: string;
  source?: string;
  sourceUrl?: string;
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
   * @example
   * 21
   */
  count?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  moduleVersions?: ListRegistryModuleVersionsResponseBodyModuleVersions[];
  /**
   * @example
   * IbuvZbAXFOiB4nKg8iOH447bhHWDavGTOMijI2Jep7c=
   */
  nextToken?: string;
  /**
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

