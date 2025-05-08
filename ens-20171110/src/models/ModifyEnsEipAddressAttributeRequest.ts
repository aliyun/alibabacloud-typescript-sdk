// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEnsEipAddressAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-5sw5dxzgi6umq4uexxkt8wpma
   */
  allocationId?: string;
  /**
   * @remarks
   * The peak bandwidth of the EIP. Default value: 5. Valid values: **5** to **10000**. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The new description of the EIP. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The new name of the EIP. The name must be 2 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * test-api-modify
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      bandwidth: 'Bandwidth',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      bandwidth: 'number',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

