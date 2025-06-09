// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEndpointsResponseBodyResultEndpointZones extends $dara.Model {
  /**
   * @example
   * vsw-bp194pz9iez****
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-k
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

