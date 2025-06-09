// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEndpointRequestEndpointZones } from "./UpdateEndpointRequestEndpointZones";


export class UpdateEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endpointZones?: UpdateEndpointRequestEndpointZones[];
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      endpointZones: 'endpointZones',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointZones: { 'type': 'array', 'itemType': UpdateEndpointRequestEndpointZones },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointZones)) {
      $dara.Model.validateArray(this.endpointZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

