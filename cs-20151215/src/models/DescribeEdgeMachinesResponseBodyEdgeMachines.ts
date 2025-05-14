// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeMachinesResponseBodyEdgeMachines extends $dara.Model {
  /**
   * @remarks
   * The time when the cloud-native box was activated.
   * 
   * @example
   * 2021-07-19T16:07:48+08:00
   */
  activeTime?: string;
  /**
   * @remarks
   * The time when the cloud-native box was created.
   * 
   * @example
   * 2021-07-07T20:44:00+08:00
   */
  created?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * c61083909b13f4a95b8554bda9577****
   */
  edgeMachineId?: string;
  /**
   * @remarks
   * The `hostname` of the cloud-native box.
   * 
   * @example
   * ack-v-b010-ssdfw****
   */
  hostname?: string;
  /**
   * @remarks
   * The lifecycle of the cloud-native box.
   * 
   * @example
   * activated
   */
  lifeState?: string;
  /**
   * @remarks
   * The model of the cloud-native box.
   * 
   * @example
   * ACK-V-B010
   */
  model?: string;
  /**
   * @remarks
   * The machine name.
   * 
   * @example
   * ack-v-b010-ssdfw****
   */
  name?: string;
  /**
   * @remarks
   * The status of the cloud-native box.
   * 
   * @example
   * online
   */
  onlineState?: string;
  /**
   * @remarks
   * The serial number.
   * 
   * @example
   * ACK9GBL31SXX****
   */
  sn?: string;
  /**
   * @remarks
   * The time when the cloud-native box was last updated.
   * 
   * @example
   * 2021-07-07T20:44:00+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'active_time',
      created: 'created',
      edgeMachineId: 'edge_machine_id',
      hostname: 'hostname',
      lifeState: 'life_state',
      model: 'model',
      name: 'name',
      onlineState: 'online_state',
      sn: 'sn',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      created: 'string',
      edgeMachineId: 'string',
      hostname: 'string',
      lifeState: 'string',
      model: 'string',
      name: 'string',
      onlineState: 'string',
      sn: 'string',
      updated: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

