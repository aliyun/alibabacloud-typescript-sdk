// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageByInstanceRequestTagList extends $dara.Model {
  key?: string;
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

export class CreateImageByInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter applies only to Cloud Desktop scenarios. Specifies whether to clear user personal data. If set to true, the created image clears data in all directories under C:\\Users except Administrator and Public.
   * 
   * @example
   * false
   */
  autoCleanUserdata?: boolean;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * 1
   */
  bizType?: number;
  copyProfile?: boolean;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * my test image v1.0
   */
  description?: string;
  /**
   * @remarks
   * The type of disk data included in the image. By default, both the system cloud disk and data cloud disk of the instance are included.
   * 
   * @example
   * ALL
   */
  diskType?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * test
   */
  imageName?: string;
  /**
   * @remarks
   * The WUYING instance ID. The instance can be a Cloud Desktop instance or a workstation instance. To ensure data consistency in the image, stop the instance before creating the image.
   * 
   * @example
   * ws-0buj1s9gm******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * WuyingServer
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * WuyingServer
   */
  productType?: string;
  /**
   * @remarks
   * The sub-instance ID. This parameter does not apply to Cloud Desktop scenarios. In workstation scenarios, specify the persistent session ID to identify a specific instance.
   * 
   * @example
   * p-0cc7s3n1l*****
   */
  subInstanceId?: string;
  tagList?: CreateImageByInstanceRequestTagList[];
  static names(): { [key: string]: string } {
    return {
      autoCleanUserdata: 'AutoCleanUserdata',
      bizType: 'BizType',
      copyProfile: 'CopyProfile',
      description: 'Description',
      diskType: 'DiskType',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      productType: 'ProductType',
      subInstanceId: 'SubInstanceId',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCleanUserdata: 'boolean',
      bizType: 'number',
      copyProfile: 'boolean',
      description: 'string',
      diskType: 'string',
      imageName: 'string',
      instanceId: 'string',
      instanceType: 'string',
      productType: 'string',
      subInstanceId: 'string',
      tagList: { 'type': 'array', 'itemType': CreateImageByInstanceRequestTagList },
    };
  }

  validate() {
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

