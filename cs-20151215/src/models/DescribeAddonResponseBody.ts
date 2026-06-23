// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonResponseBodyNewerVersions extends $dara.Model {
  /**
   * @remarks
   * The minimum cluster version required by this component version.
   * 
   * @example
   * 1.20.4
   */
  minimumClusterVersion?: string;
  /**
   * @remarks
   * Whether the component can be upgraded to this version.
   * 
   * - true: Upgrade is supported.
   * 
   * - false: Upgrade is not supported.
   * 
   * @example
   * true
   */
  upgradable?: boolean;
  /**
   * @remarks
   * The latest version number of the component.
   * 
   * @example
   * v1.9.3.10-7dfca203-aliyun
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      minimumClusterVersion: 'minimum_cluster_version',
      upgradable: 'upgradable',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minimumClusterVersion: 'string',
      upgradable: 'boolean',
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

export class DescribeAddonResponseBody extends $dara.Model {
  /**
   * @remarks
   * CPU architectures supported by the component.
   */
  architecture?: string[];
  /**
   * @remarks
   * Component category.
   * 
   * @example
   * network
   */
  category?: string;
  /**
   * @remarks
   * Custom parameter schema of the component.
   * 
   * @example
   * {}
   */
  configSchema?: string;
  /**
   * @remarks
   * Whether it is installed by default.
   * 
   * @example
   * true
   */
  installByDefault?: boolean;
  /**
   * @remarks
   * Whether it is a managed component.
   * 
   * @example
   * false
   */
  managed?: boolean;
  /**
   * @remarks
   * Component name.
   * 
   * @example
   * coredns
   */
  name?: string;
  /**
   * @remarks
   * Information about the latest component versions.
   */
  newerVersions?: DescribeAddonResponseBodyNewerVersions[];
  /**
   * @remarks
   * Operations supported by the component.
   */
  supportedActions?: string[];
  /**
   * @remarks
   * Component version.
   * 
   * @example
   * v1.9.3.6-32932850-aliyun
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      category: 'category',
      configSchema: 'config_schema',
      installByDefault: 'install_by_default',
      managed: 'managed',
      name: 'name',
      newerVersions: 'newer_versions',
      supportedActions: 'supported_actions',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      configSchema: 'string',
      installByDefault: 'boolean',
      managed: 'boolean',
      name: 'string',
      newerVersions: { 'type': 'array', 'itemType': DescribeAddonResponseBodyNewerVersions },
      supportedActions: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.architecture)) {
      $dara.Model.validateArray(this.architecture);
    }
    if(Array.isArray(this.newerVersions)) {
      $dara.Model.validateArray(this.newerVersions);
    }
    if(Array.isArray(this.supportedActions)) {
      $dara.Model.validateArray(this.supportedActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

