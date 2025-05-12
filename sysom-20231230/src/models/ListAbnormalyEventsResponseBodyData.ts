// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAbnormalyEventsResponseBodyDataOpts } from "./ListAbnormalyEventsResponseBodyDataOpts";


export class ListAbnormalyEventsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1725801090000
   */
  createdAt?: number;
  description?: string;
  diagStatus?: number;
  endAt?: number;
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  item?: string;
  level?: string;
  namespace?: string;
  opts?: ListAbnormalyEventsResponseBodyDataOpts[];
  pod?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * saturation
   */
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      diagStatus: 'diag_status',
      endAt: 'end_at',
      instance: 'instance',
      item: 'item',
      level: 'level',
      namespace: 'namespace',
      opts: 'opts',
      pod: 'pod',
      regionId: 'region_id',
      type: 'type',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      description: 'string',
      diagStatus: 'number',
      endAt: 'number',
      instance: 'string',
      item: 'string',
      level: 'string',
      namespace: 'string',
      opts: { 'type': 'array', 'itemType': ListAbnormalyEventsResponseBodyDataOpts },
      pod: 'string',
      regionId: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.opts)) {
      $dara.Model.validateArray(this.opts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

