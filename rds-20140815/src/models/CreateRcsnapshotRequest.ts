// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * By default, this parameter is left empty.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The cloud disk ID.
   * 
   * @example
   * rcd-wz9f3peueu5npsl****
   */
  diskId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * none
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * none
   */
  instantAccessRetentionDays?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The retention period of the snapshot. Valid values: 1 to 65536. Unit: days. The snapshot is automatically released when its retention period expires.
   * 
   * By default, this parameter is left empty, which specifies that the snapshot is not automatically released.
   * 
   * @example
   * 2
   */
  retentionDays?: number;
  /**
   * @remarks
   * This parameter has been deprecated.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      diskId: 'DiskId',
      instantAccess: 'InstantAccess',
      instantAccessRetentionDays: 'InstantAccessRetentionDays',
      regionId: 'RegionId',
      retentionDays: 'RetentionDays',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      diskId: 'string',
      instantAccess: 'boolean',
      instantAccessRetentionDays: 'number',
      regionId: 'string',
      retentionDays: 'number',
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

