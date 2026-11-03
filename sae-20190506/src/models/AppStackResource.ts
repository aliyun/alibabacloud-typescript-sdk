// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppStackResource extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1706518652000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-78yt
   */
  instanceId?: string;
  /**
   * @remarks
   * The product.
   * 
   * @example
   * VPC
   */
  productCode?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vsw-qwe112233
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * vsw-palworld-a
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * VSWITCH
   */
  resourceType?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * palworld
   */
  stackId?: string;
  /**
   * @remarks
   * The resource status.
   * 
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

