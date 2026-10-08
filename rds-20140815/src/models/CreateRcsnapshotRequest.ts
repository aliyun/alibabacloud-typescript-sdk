// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCSnapshotRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testRC
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test01
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
   * The description of the snapshot. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: null.
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
   * This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * None
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * None
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
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rc-t8q22a87745hf8****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Settings for the retention period of the snapshot. Unit: days. The snapshot is subject to automatic release after the retention period expires. Valid values: 1 to 65536.
   * 
   * Default value: null, which indicates that the snapshot is not subject to automatic release.
   * 
   * @example
   * 2
   */
  retentionDays?: number;
  /**
   * @remarks
   * The tag details.
   */
  tag?: CreateRCSnapshotRequestTag[];
  /**
   * @remarks
   * This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * None
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

