// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppStackResource extends $dara.Model {
  /**
   * @example
   * 1706518652000
   */
  createTime?: number;
  /**
   * @example
   * i-78yt
   */
  instanceId?: string;
  /**
   * @example
   * VPC
   */
  productCode?: string;
  /**
   * @example
   * vsw-qwe112233
   */
  resourceId?: string;
  /**
   * @example
   * vsw-palworld-a
   */
  resourceName?: string;
  /**
   * @example
   * VSWITCH
   */
  resourceType?: string;
  /**
   * @example
   * palworld
   */
  stackId?: string;
  /**
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      productCode: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      stackId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

