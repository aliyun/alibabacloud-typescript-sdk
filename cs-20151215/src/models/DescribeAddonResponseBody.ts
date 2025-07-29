// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonResponseBodyNewerVersions extends $dara.Model {
  /**
   * @remarks
   * The minimum cluster version required by the component version.
   * 
   * @example
   * 1.20.4
   */
  minimumClusterVersion?: string;
  /**
   * @remarks
   * Indicates whether the component can be updated to the version.
   * 
   * *   true: yes
   * *   false: no
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
   * The CPU architecture supported by the component.
   */
  architecture?: string[];
  /**
   * @remarks
   * The category of the component.
   * 
   * @example
   * network
   */
  category?: string;
  /**
   * @remarks
   * The custom parameter schema of the component.
   * 
   * @example
   * {}
   */
  configSchema?: string;
  /**
   * @remarks
   * Indicates whether the component is automatically installed by default.
   * 
   * @example
   * true
   */
  installByDefault?: boolean;
  /**
   * @remarks
   * Indicates whether the component is fully managed.
   * 
   * @example
   * false
   */
  managed?: boolean;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * coredns
   */
  name?: string;
  /**
   * @remarks
   * The latest version information of the component.
   */
  newerVersions?: DescribeAddonResponseBodyNewerVersions[];
  /**
   * @remarks
   * The operations supported by the component.
   */
  supportedActions?: string[];
  /**
   * @remarks
   * The version of the component.
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

