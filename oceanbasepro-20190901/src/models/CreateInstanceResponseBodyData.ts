// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The result of the dry-run request.
   * 
   * If the DryRun parameter is set to true and the dry run succeeds, the DryRunResult parameter returns true. Otherwise, an error code is returned.
   * If the DryRun parameter is set to false, no dry run is performed and the DryRunResult parameter returns false.
   * 
   * @example
   * true
   */
  dryRunResult?: boolean;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * Order ID. The ID of the order that you have placed.
   * This parameter returns a value after you create a pre-paid or post-paid cluster.
   * 
   * @example
   * 1234567890
   */
  orderId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-***************
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: 'boolean',
      instanceId: 'string',
      orderId: 'string',
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

