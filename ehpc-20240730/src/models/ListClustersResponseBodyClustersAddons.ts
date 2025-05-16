// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClustersResponseBodyClustersAddonsResourcesSpec } from "./ListClustersResponseBodyClustersAddonsResourcesSpec";
import { ListClustersResponseBodyClustersAddonsServicesSpec } from "./ListClustersResponseBodyClustersAddonsServicesSpec";


export class ListClustersResponseBodyClustersAddons extends $dara.Model {
  /**
   * @remarks
   * The addon ID.
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
  resourcesSpec?: ListClustersResponseBodyClustersAddonsResourcesSpec;
  /**
   * @remarks
   * The information about the addon services.
   */
  servicesSpec?: ListClustersResponseBodyClustersAddonsServicesSpec[];
  /**
   * @remarks
   * The addon state.
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
      label: 'string',
      name: 'string',
      resourcesSpec: ListClustersResponseBodyClustersAddonsResourcesSpec,
      servicesSpec: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersAddonsServicesSpec },
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

