// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCSnapshotRequestTag extends $dara.Model {
  /**
   * @example
   * None
   */
  key?: string;
  /**
   * @example
   * None
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * None
   */
  resourceGroupId?: string;
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
  tag?: CreateRCSnapshotRequestTag[];
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
      resourceGroupId: 'ResourceGroupId',
      retentionDays: 'RetentionDays',
      tag: 'Tag',
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
      resourceGroupId: 'string',
      retentionDays: 'number',
      tag: { 'type': 'array', 'itemType': CreateRCSnapshotRequestTag },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

