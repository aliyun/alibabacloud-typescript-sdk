// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic release of the instance after the image is packaged and uploaded. This parameter is supported only for build instances.
   * 
   * - true: The image is released together with the instance when the instance is released.
   * - false: The image is retained when the instance is released.
   * - If this parameter is left empty, the default value is false.
   * 
   * @example
   * false
   */
  deleteAfterImageUpload?: string;
  /**
   * @remarks
   * The image name. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * ImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-5rr1bnyrc4tswr8cq3w6y****
   */
  instanceId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The region of the destination OSS bucket where the image is stored.
   * 
   * @example
   * cn-beijing
   */
  targetOSSRegionId?: string;
  /**
   * @remarks
   * Specifies whether to include data cloud disks when creating the image.
   * 
   * @example
   * Valid values:
   * true: includes data cloud disks.
   * false: default value. Does not include data cloud disks
   */
  withDataDisks?: boolean;
  static names(): { [key: string]: string } {
    return {
      deleteAfterImageUpload: 'DeleteAfterImageUpload',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      snapshotId: 'SnapshotId',
      targetOSSRegionId: 'TargetOSSRegionId',
      withDataDisks: 'WithDataDisks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAfterImageUpload: 'string',
      imageName: 'string',
      instanceId: 'string',
      snapshotId: 'string',
      targetOSSRegionId: 'string',
      withDataDisks: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

