// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegistryModuleVersionResponseBodyModuleVersion extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-02-08T02:22:16Z
   */
  createTime?: string;
  /**
   * @remarks
   * The product page URL.
   * 
   * @example
   * URL
   */
  detailUrl?: string;
  /**
   * @remarks
   * The number of downloads.
   * 
   * @example
   * 24
   */
  downloads?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * ecs-cluster
   */
  moduleName?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * alibabacloud
   */
  namespaceName?: string;
  /**
   * @remarks
   * The provider type. Valid values:
   * 
   * - alicloud: Alibaba Cloud.
   * 
   * @example
   * alicloud
   */
  provider?: string;
  /**
   * @remarks
   * The template source.
   * 
   * @example
   * namespaceName/ModuleName
   */
  source?: string;
  /**
   * @remarks
   * The template source URL.
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
  /**
   * @remarks
   * The version information.
   */
  moduleVersion?: GetRegistryModuleVersionResponseBodyModuleVersion;
  /**
   * @remarks
   * The request ID.
   * 
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

