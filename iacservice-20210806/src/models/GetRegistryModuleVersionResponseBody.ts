// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegistryModuleVersionResponseBodyModuleVersion extends $dara.Model {
  createTime?: string;
  detailUrl?: string;
  downloads?: string;
  moduleName?: string;
  namespaceName?: string;
  provider?: string;
  source?: string;
  sourceUrl?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      detailUrl: 'detailUrl',
      downloads: 'downloads',
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
      detailUrl: 'string',
      downloads: 'string',
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

export class GetRegistryModuleVersionResponseBody extends $dara.Model {
  moduleVersion?: GetRegistryModuleVersionResponseBodyModuleVersion;
  /**
   * @example
   * 62DF26B0-53F0-5747-9D7F-FEF444FB4E24
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleVersion: 'moduleVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleVersion: GetRegistryModuleVersionResponseBodyModuleVersion,
      requestId: 'string',
    };
  }

  validate() {
    if(this.moduleVersion && typeof (this.moduleVersion as any).validate === 'function') {
      (this.moduleVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

