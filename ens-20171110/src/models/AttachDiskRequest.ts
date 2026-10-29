// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the cloud disk to be mounted is released when the instance is released. Valid values:
   * 
   * - true: The cloud disk is released when the instance is released.
   * - false: The cloud disk is retained when the instance is released.
   * - Empty: The default value is false.
   * 
   * @example
   * false
   */
  deleteWithInstance?: string;
  /**
   * @remarks
   * The ID of the cloud disk to mount. The cloud disk and the instance must be in the same edge zone.
   * 
   * This parameter is required.
   * 
   * @example
   * d-5saf13yy6sopmmg88mzsg****
   */
  diskId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5rr19av7tkpgi9os52ag1****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteWithInstance: 'DeleteWithInstance',
      diskId: 'DiskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteWithInstance: 'string',
      diskId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

