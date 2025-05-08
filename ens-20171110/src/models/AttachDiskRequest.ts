// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the disk to be attached is released with the instance. Valid values:
   * 
   * *   true: The disk will be released when the ECS instance is released.
   * *   false: The disk will be retained when the ECS instance is released.
   * *   If you leave this parameter empty, the default value is used.
   * 
   * @example
   * false
   */
  deleteWithInstance?: string;
  /**
   * @remarks
   * The ID of the disk to be attached. The cloud disk and the instance must belong to the same node.
   * 
   * This parameter is required.
   * 
   * @example
   * d-5saf13yy6sopmmg88mzsg****
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the instance.
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

