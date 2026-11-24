// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method. Only 5 (pay-as-you-go) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  paidType?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      paidType: 'PaidType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paidType: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

