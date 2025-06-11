// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantResponseBodyTenantTenantZonesTenantZoneReplicas extends $dara.Model {
  /**
   * @remarks
   * The ID of the full-featured replica.
   * 
   * @example
   * 3
   */
  fullCopyId?: number;
  /**
   * @remarks
   * The name of the logical zone.
   * 
   * @example
   * cn-shanghai-f-z0
   */
  logicZoneName?: string;
  /**
   * @remarks
   * The ID of the read-only replica.
   * 
   * @example
   * 3
   */
  readOnlyCopyId?: string;
  /**
   * @remarks
   * The type of the read-only replica.
   * 
   * @example
   * ROW_STORE
   */
  readOnlyReplicaType?: string;
  /**
   * @remarks
   * The ID of the zone replica.
   * 
   * @example
   * 2
   */
  zoneCopyId?: number;
  /**
   * @remarks
   * The number of nodes in the zone.
   * 
   * @example
   * 1
   */
  zoneNodes?: number;
  /**
   * @remarks
   * The type of the zone replica.
   * 
   * @example
   * FULL
   */
  zoneReplicaType?: string;
  static names(): { [key: string]: string } {
    return {
      fullCopyId: 'FullCopyId',
      logicZoneName: 'LogicZoneName',
      readOnlyCopyId: 'ReadOnlyCopyId',
      readOnlyReplicaType: 'ReadOnlyReplicaType',
      zoneCopyId: 'ZoneCopyId',
      zoneNodes: 'ZoneNodes',
      zoneReplicaType: 'ZoneReplicaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullCopyId: 'number',
      logicZoneName: 'string',
      readOnlyCopyId: 'string',
      readOnlyReplicaType: 'string',
      zoneCopyId: 'number',
      zoneNodes: 'number',
      zoneReplicaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

