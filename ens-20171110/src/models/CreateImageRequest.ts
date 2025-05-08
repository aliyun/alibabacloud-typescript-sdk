// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically release the instance after the image is packaged and uploaded. Only image builders are supported. Default value: false. Valid values:
   * 
   * *   true: The image is released when the instance is released.
   * *   false: The image is retained when the instance is released.
   * *   If you leave this property empty, false is used by default.
   * 
   * @example
   * false
   */
  deleteAfterImageUpload?: string;
  /**
   * @remarks
   * The name of the image. The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter but cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-5rr1bnyrc4tswr8cq3w6y****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The region of the destination OSS bucket where the image is to be stored.
   * 
   * @example
   * cn-beijing
   */
  targetOSSRegionId?: string;
  /**
   * @remarks
   * 创建镜像是否包含数据盘。
   * 
   * @example
   * 取值
   * true：附带数据盘
   * false：默认值，不附带数据盘
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

