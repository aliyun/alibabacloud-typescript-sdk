// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableCpuResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The CPU resources available.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * ```
   * http(s)://[Endpoint]/?Action=DescribeAvailableCpuResource
   * &InstanceId=ob317v4uif****
   * &TenantId=ob2mr3oae0****
   * &ModifyType=update
   * &Common request parameters
   * ```
   * 
   * @example
   * update
   */
  modifyType?: string;
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **DescribeAvailableCpuResource**.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      modifyType: 'ModifyType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      modifyType: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

