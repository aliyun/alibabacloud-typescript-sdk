// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterAvailableResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of zone IDs.
   */
  availableZones?: string[];
  /**
   * @remarks
   * A list of primary zones.
   */
  masterZones?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4F480E0-4E76-5E43-9966-8322C28A158A
   */
  requestId?: string;
  /**
   * @remarks
   * A list of secondary zone IDs.
   */
  slaveZones?: string[];
  /**
   * @remarks
   * Indicates whether the zone supports the multicast feature.
   * 
   * @example
   * false
   */
  supportMulticast?: boolean;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      masterZones: 'MasterZones',
      requestId: 'RequestId',
      slaveZones: 'SlaveZones',
      supportMulticast: 'SupportMulticast',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': 'string' },
      masterZones: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      slaveZones: { 'type': 'array', 'itemType': 'string' },
      supportMulticast: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.availableZones)) {
      $dara.Model.validateArray(this.availableZones);
    }
    if(Array.isArray(this.masterZones)) {
      $dara.Model.validateArray(this.masterZones);
    }
    if(Array.isArray(this.slaveZones)) {
      $dara.Model.validateArray(this.slaveZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

