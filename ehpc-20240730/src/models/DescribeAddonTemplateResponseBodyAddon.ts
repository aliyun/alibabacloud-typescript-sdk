// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAddonTemplateResponseBodyAddonResourcesSpec } from "./DescribeAddonTemplateResponseBodyAddonResourcesSpec";
import { DescribeAddonTemplateResponseBodyAddonServicesSpec } from "./DescribeAddonTemplateResponseBodyAddonServicesSpec";


export class DescribeAddonTemplateResponseBodyAddon extends $dara.Model {
  /**
   * @remarks
   * The addon description.
   */
  description?: string;
  /**
   * @remarks
   * The addon icon.
   * 
   * @example
   * /assets/icons/your_icon.svg
   */
  icon?: string;
  /**
   * @remarks
   * The addon label.
   */
  label?: string;
  /**
   * @remarks
   * The date when the addon template was last updated.
   * 
   * @example
   * 2024-08-22 18:11:17
   */
  lastUpdate?: string;
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @remarks
   * The resource configurations of the addon.
   */
  resourcesSpec?: DescribeAddonTemplateResponseBodyAddonResourcesSpec;
  /**
   * @remarks
   * The addon configurations.
   */
  servicesSpec?: DescribeAddonTemplateResponseBodyAddonServicesSpec[];
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      icon: 'Icon',
      label: 'Label',
      lastUpdate: 'LastUpdate',
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      icon: 'string',
      label: 'string',
      lastUpdate: 'string',
      name: 'string',
      resourcesSpec: DescribeAddonTemplateResponseBodyAddonResourcesSpec,
      servicesSpec: { 'type': 'array', 'itemType': DescribeAddonTemplateResponseBodyAddonServicesSpec },
      version: 'string',
    };
  }

  validate() {
    if(this.resourcesSpec && typeof (this.resourcesSpec as any).validate === 'function') {
      (this.resourcesSpec as any).validate();
    }
    if(Array.isArray(this.servicesSpec)) {
      $dara.Model.validateArray(this.servicesSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

