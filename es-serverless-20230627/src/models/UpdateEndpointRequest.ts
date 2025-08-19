// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEndpointRequestEndpointZones extends $dara.Model {
  /**
   * @example
   * vsw-bp18r8uwnukv3rvi9****
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

