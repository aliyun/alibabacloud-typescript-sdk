// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonsResponseBodyAddons extends $dara.Model {
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
   * monitor
   */
  category?: string;
  /**
   * @remarks
   * The schema of the custom parameters of the component.
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
   * false
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
   * The component name.
   * 
   * @example
   * arms-prometheus
   */
  name?: string;
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
   * The version number.
   * 
   * @example
   * 1.1.9
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
      supportedActions: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.architecture)) {
      $dara.Model.validateArray(this.architecture);
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

export class ListAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of available components.
   */
  addons?: ListAddonsResponseBodyAddons[];
  static names(): { [key: string]: string } {
    return {
      addons: 'addons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddons },
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

