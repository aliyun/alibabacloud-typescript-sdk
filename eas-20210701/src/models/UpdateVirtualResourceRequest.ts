// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateVirtualResourceRequestResources } from "./UpdateVirtualResourceRequestResources";


export class UpdateVirtualResourceRequest extends $dara.Model {
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
   * 
   * >  If you specify this parameter, previous data is overwritten.
   */
  resources?: UpdateVirtualResourceRequestResources[];
  /**
   * @remarks
   * The new name of the virtual resource group.
   * 
   * @example
   * NewMyVirtualResource
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
      resources: { 'type': 'array', 'itemType': UpdateVirtualResourceRequestResources },
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

