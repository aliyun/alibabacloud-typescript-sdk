// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEndpointRequestEndpointZones } from "./CreateEndpointRequestEndpointZones";


export class CreateEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endpointZones?: CreateEndpointRequestEndpointZones[];
  /**
   * @example
   * testendpoint
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-uf664nyle5khp5***
   */
  vpcId?: string;
  /**
   * @example
   * VPC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpointZones: 'endpointZones',
      name: 'name',
      vpcId: 'vpcId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointZones: { 'type': 'array', 'itemType': CreateEndpointRequestEndpointZones },
      name: 'string',
      vpcId: 'string',
      type: 'string',
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

