// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSDGRequest extends $dara.Model {
  /**
   * @remarks
   * The billing logic for SDG child disks. This parameter specifies the billing method for the RBD child disks produced by this SDG. This parameter does not apply to standard cloud disks.
   * Optional parameter values:
   * 
   * - Hour.
   * 
   * -  Day. This is the default value.
   * 
   * 
   * > - Parameter description: The longer the cycle, the lower the cost. If the disk is released before the billing cycle ends, a service fee is charged.
   * 
   * @example
   * Day
   */
  billingCycle?: string;
  /**
   * @remarks
   * The description of the SDG.
   * > Provide a detailed description for easier future queries.
   * 
   * @example
   * Test SDG
   */
  description?: string;
  /**
   * @remarks
   * The type of the source disk.
   * Optional parameter values:
   * -  standard: standard cloud disk. This is the default value.
   * -  rbd: RBD disk.
   * 
   * > - Limits: RBD disk SDGs and standard disk SDGs cannot inherit from each other.
   * 
   * @example
   * standard
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of an existing SDG.
   * > - If you are creating an SDG for the first time, leave **FromSDGId** empty.
   * >- If **FromSDGId** is invalid or the corresponding raw cloud disk cannot be found, an error is returned.
   * >- If **FromSDGId** is not empty, this indicates that you are operating on an existing SDG rather than creating one for the first time.
   * 
   * @example
   * sdg-xxxxx
   */
  fromSDGId?: string;
  /**
   * @remarks
   * The AIC instance ID. You can call the [DescribeARMServerInstances](~~DescribeARMServerInstances~~) operation to obtain the InstanceId value.
   * 
   * This parameter is required.
   * 
   * @example
   * aic-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The SDG sharing ratio parameter. This parameter supports cloud disks with different maximum sharing ratios.
   * 
   * @example
   * 100
   */
  performanceLevel?: number;
  /**
   * @remarks
   * The maximum capacity of the SDG. Unit: GB.
   * >- To reduce costs, evaluate the required capacity as needed.
   * >- If you are creating an SDG for the first time, **Size** is required.
   * >- If the data volume increases later, pass a new **Size** value to expand the capacity. If **Size** is not empty and is greater than the original **Size** value of the SDG, the raw cloud disk of the SDG is expanded to the specified **Size**. If **Size** is empty or the specified **Size** is less than the original **Size** value of the SDG, no action is taken.
   * 
   * The minimum tested usable value is 150 GB.
   * 
   * @example
   * 150
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      description: 'Description',
      diskType: 'DiskType',
      fromSDGId: 'FromSDGId',
      instanceId: 'InstanceId',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      description: 'string',
      diskType: 'string',
      fromSDGId: 'string',
      instanceId: 'string',
      performanceLevel: 'number',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

