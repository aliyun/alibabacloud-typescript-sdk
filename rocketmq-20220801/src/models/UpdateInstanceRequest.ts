// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateInstanceRequestAclInfo } from "./UpdateInstanceRequestAclInfo";
import { UpdateInstanceRequestNetworkInfo } from "./UpdateInstanceRequestNetworkInfo";
import { UpdateInstanceRequestProductInfo } from "./UpdateInstanceRequestProductInfo";


export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The access control list for the instance.
   */
  aclInfo?: UpdateInstanceRequestAclInfo;
  /**
   * @remarks
   * The updated name of the instance.
   * 
   * @example
   * test_instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The updated network information about the instance.
   */
  networkInfo?: UpdateInstanceRequestNetworkInfo;
  /**
   * @remarks
   * Additional configurations of the instance.
   */
  productInfo?: UpdateInstanceRequestProductInfo;
  /**
   * @remarks
   * The updated description of the instance.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      aclInfo: 'aclInfo',
      instanceName: 'instanceName',
      networkInfo: 'networkInfo',
      productInfo: 'productInfo',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclInfo: UpdateInstanceRequestAclInfo,
      instanceName: 'string',
      networkInfo: UpdateInstanceRequestNetworkInfo,
      productInfo: UpdateInstanceRequestProductInfo,
      remark: 'string',
    };
  }

  validate() {
    if(this.aclInfo && typeof (this.aclInfo as any).validate === 'function') {
      (this.aclInfo as any).validate();
    }
    if(this.networkInfo && typeof (this.networkInfo as any).validate === 'function') {
      (this.networkInfo as any).validate();
    }
    if(this.productInfo && typeof (this.productInfo as any).validate === 'function') {
      (this.productInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

