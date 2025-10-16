// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageByInstanceRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  autoCleanUserdata?: boolean;
  /**
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @example
   * my test image v1.0
   */
  description?: string;
  /**
   * @example
   * ALL
   */
  diskType?: string;
  /**
   * @example
   * test
   */
  imageName?: string;
  /**
   * @example
   * ws-0buj1s9gm******
   */
  instanceId?: string;
  /**
   * @example
   * WuyingServer
   */
  instanceType?: string;
  /**
   * @example
   * WuyingServer
   */
  productType?: string;
  /**
   * @example
   * p-0cc7s3n1l*****
   */
  subInstanceId?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

