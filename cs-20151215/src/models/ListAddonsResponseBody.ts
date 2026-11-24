// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonsResponseBodyAddons extends $dara.Model {
  /**
   * @remarks
   * The CPU architectures supported by the add-on.
   */
  architecture?: string[];
  /**
   * @remarks
   * The category of the add-on. Valid values:
   * - core: Core add-on.
   * - network: Network add-on.
   * - security: Security add-on.
   * - storage: Storage add-on.
   * - monitor: Logging and monitoring add-on.
   * - application: Application add-on.
   * An empty value indicates that the add-on type is other.
   * 
   * @example
   * monitor
   */
  category?: string;
  /**
   * @remarks
   * The schema of custom parameters for the add-on.
   * 
   * @example
   * {}
   */
  configSchema?: string;
  /**
   * @remarks
   * Indicates whether the add-on is installed by default. Valid values:
   * - true: The add-on is installed by default when the cluster is created.
   * - false: The add-on is not installed by default.
   * 
   * @example
   * false
   */
  installByDefault?: boolean;
  /**
   * @remarks
   * Indicates whether the add-on is managed. Valid values:
   * - true: The add-on is managed.
   * - false: The add-on is not managed.
   * 
   * @example
   * false
   */
  managed?: boolean;
  /**
   * @remarks
   * The name of the add-on.
   * 
   * @example
   * arms-prometheus
   */
  name?: string;
  /**
   * @remarks
   * The operations supported by the add-on.
   */
  supportedActions?: string[];
  /**
   * @remarks
   * The version of the add-on.
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
   * The list of available add-ons.
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

