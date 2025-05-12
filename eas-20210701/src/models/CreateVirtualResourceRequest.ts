// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVirtualResourceRequestResources } from "./CreateVirtualResourceRequestResources";


export class CreateVirtualResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the retention period of preemptible instances.
   * 
   * @example
   * true
   */
  disableSpotProtectionPeriod?: boolean;
  /**
   * @remarks
   * The resources in the virtual resource group.
   */
  resources?: CreateVirtualResourceRequestResources[];
  /**
   * @remarks
   * The name of the virtual resource group. Default value: the ID of the virtual resource group.
   * 
   * @example
   * MyVirtualResource
   */
  virtualResourceName?: string;
  static names(): { [key: string]: string } {
    return {
      disableSpotProtectionPeriod: 'DisableSpotProtectionPeriod',
      resources: 'Resources',
      virtualResourceName: 'VirtualResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableSpotProtectionPeriod: 'boolean',
      resources: { 'type': 'array', 'itemType': CreateVirtualResourceRequestResources },
      virtualResourceName: 'string',
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

