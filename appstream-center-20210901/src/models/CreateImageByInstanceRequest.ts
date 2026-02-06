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
   * This parameter is applicable only to scenarios in which the instance type is Cloud Desktop. Specifies whether to clear private data of users. If this parameter is set to true, the created image clears data in directories other than Administrator and Public in the C:\\Users directory.
   * 
   * Valid values:
   * 
   * *   true: cleanup.
   * *   false: does not clear.
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
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * my test image v1.0
   */
  description?: string;
  /**
   * @remarks
   * The type of disk data contained in the image. By default, the system disk and data disk of the instance are included.
   * 
   * Valid values:
   * 
   * *   SYSTEM: only system disk.
   * *   ALL: system disk + data disk
   * 
   * @example
   * ALL
   */
  diskType?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * test
   */
  imageName?: string;
  /**
   * @remarks
   * The ID of the RDS instance. The instance can be a CloudDesktop instance, a workstation instance. To ensure data consistency in the image, we recommend that you shut down the instance before you create an image.
   * 
   * @example
   * ws-0buj1s9gm******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * Valid values:
   * 
   * *   CloudDesktop: Cloud Desktop.
   * *   WuyingServer: Workstation
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
   * The ID of the child instance. This parameter is not used in cloud computing scenarios. Workstation scenarios, you need to specify a persistent session ID to ensure that a specific instance is located.
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

