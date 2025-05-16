// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAddonResponseBodyAddonResourcesSpec } from "./GetAddonResponseBodyAddonResourcesSpec";
import { GetAddonResponseBodyAddonServicesSpec } from "./GetAddonResponseBodyAddonServicesSpec";


export class GetAddonResponseBodyAddon extends $dara.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W2g****
   */
  addonId?: string;
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
   * The time when the addon was installed.
   * 
   * @example
   * 2024-08-22 18:11:17
   */
  installTime?: string;
  /**
   * @remarks
   * The addon label.
   */
  label?: string;
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
  resourcesSpec?: GetAddonResponseBodyAddonResourcesSpec;
  /**
   * @remarks
   * The service configurations of the addon.
   */
  servicesSpec?: GetAddonResponseBodyAddonServicesSpec[];
  /**
   * @remarks
   * The addon status.
   * 
   * @example
   * Running
   */
  status?: string;
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
      addonId: 'AddonId',
      description: 'Description',
      icon: 'Icon',
      installTime: 'InstallTime',
      label: 'Label',
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      description: 'string',
      icon: 'string',
      installTime: 'string',
      label: 'string',
      name: 'string',
      resourcesSpec: GetAddonResponseBodyAddonResourcesSpec,
      servicesSpec: { 'type': 'array', 'itemType': GetAddonResponseBodyAddonServicesSpec },
      status: 'string',
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

