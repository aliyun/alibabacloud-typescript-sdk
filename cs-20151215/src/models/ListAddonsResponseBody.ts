// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonsResponseBodyAddons extends $dara.Model {
  /**
   * @remarks
   * The CPU architectures supported by the component.
   */
  architecture?: string[];
  /**
   * @remarks
   * The component categorization. Valid values:
   * 
   * - core: core component.
   * - network: network type component.
   * - security: security component.
   * - storage: storage component.
   * - monitor: logging and monitoring component.
   * - application: application component.
   * 
   * An empty value indicates that the component belongs to another category.
   * 
   * @example
   * monitor
   */
  category?: string;
  /**
   * @remarks
   * The schema of custom parameters for the component.
   * 
   * @example
   * {}
   */
  configSchema?: string;
  /**
   * @remarks
   * Indicates whether the component is installed by default. Valid values:
   * 
   * - true: The component is installed by default when a cluster is created.
   * 
   * - false: The component is not installed by default.
   * 
   * @example
   * false
   */
  installByDefault?: boolean;
  /**
   * @remarks
   * Indicates whether the component is managed. Valid values:
   * 
   * - true: The component is managed.
   * 
   * - false: The component is not managed.
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
   * The operations supported by the component.
   */
  supportedActions?: string[];
  /**
   * @remarks
   * The component version.
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

