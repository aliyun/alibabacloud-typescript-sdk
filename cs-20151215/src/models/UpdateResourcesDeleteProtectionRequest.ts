// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourcesDeleteProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the resource. Valid values:
   * 
   * - true: Enables deletion protection. After deletion protection is enabled, you must manually disable deletion protection before you can delete the specified resource.
   * 
   * - false: Disables deletion protection.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The namespace of the resource.
   * 
   * Default value: default.
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
   * The type of resource to update. Valid values:
   * 
   * - namespaces: namespace.
   * 
   * - services: service.
   * 
   * @example
   * services
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of target resources.
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

