// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourcesDeleteProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Set the value to true to enable deletion protection and set the value to false to disable deletion protection.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The namespace to which the resource belongs.
   * 
   * @example
   * default
   * 
   * **if can be null:**
   * true
   */
  namespace?: string;
  /**
   * @remarks
   * The type of resource for which deletion protection is enabled or disabled. You can specify namespaces or Services.
   * 
   * @example
   * services
   */
  resourceType?: string;
  /**
   * @remarks
   * The resources list.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      namespace: 'namespace',
      resourceType: 'resource_type',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      namespace: 'string',
      resourceType: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

