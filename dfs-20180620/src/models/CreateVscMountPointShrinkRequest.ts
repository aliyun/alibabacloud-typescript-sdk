// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVscMountPointShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the mount target.
   * 
   * The description must be 0 to 100 characters in length.
   * 
   * @example
   * HDFS file system mounted on internal instances
   */
  description?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e389e5c7-bcb4-4558-846a-e5afc444****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * The IDs of the ECS instances to which you want to mount the Apsara File Storage for HDFS file system. 
   * 
   * Separate multiple ECS instance IDs with commas (,). You can specify up to 100 ECS instance IDs.
   * 
   * @example
   * [
   *       "i-bp1g6zv0ce8oghu7****",
   *       "i-bp1g6zv0ce8oghu1****"
   * ]
   */
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      instanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

