// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAddonResponseBodyNewerVersions } from "./DescribeAddonResponseBodyNewerVersions";


export class DescribeAddonResponseBody extends $dara.Model {
  /**
   * @remarks
   * Architectures supported by the component. Valid values:
   * 
   * *   amd64
   * *   arm64
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
   * The latest version of the component.
   */
  newerVersions?: DescribeAddonResponseBodyNewerVersions[];
  /**
   * @remarks
   * Operations supported by the component. Valid values:
   * 
   * *   Install
   * *   Upgrade
   * *   Modify
   * *   Uninstall
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

