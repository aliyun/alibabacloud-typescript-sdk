// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSDGRequest extends $dara.Model {
  billingCycle?: string;
  /**
   * @remarks
   * The description of the SDG.
   * 
   * >  We recommend that you specify this parameter in details for subsequent queries.
   * 
   * @example
   * Testing SDGs
   */
  description?: string;
  diskType?: string;
  /**
   * @remarks
   * The ID of the SDG from which you want to create an SDG.
   * 
   * > 
   * 
   * *   The first time you create an SDG, the **FromSDGId** parameter is empty.
   * 
   * *   If the value of the **FromSDGId** parameter is invalid or does not correspond to an original disk, an error is reported.
   * 
   * *   If the value of the **FromSDGId** parameter is not empty, you have created an SDG, and the operation is performed on the existing SDG.
   * 
   * @example
   * sdg-xxxxx
   */
  fromSDGId?: string;
  /**
   * @remarks
   * The ID of the AIC instance. You can call the [DescribeARMServerInstances](~~DescribeARMServerInstances~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aic-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum capacity of the SDG. Unit: GB.
   * 
   * > 
   * 
   * *   To save costs, we recommend that you specify this parameter based on your business requirements.
   * 
   * *   The first time that you create an SDG, the **Size** parameter is required.
   * 
   * *   When the amount of data increases, you can pass a new **Size** parameter for resizing. If the value of the new **Size** parameter is greater than the value of the old **Size** parameter, the disk size of the SDG is increased to the size that is specified by the new **Size** parameter. If the value of the new **Size** parameter is empty or smaller than that of the old **Size** parameter, no operation is performed.
   * 
   * @example
   * 20
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      description: 'Description',
      diskType: 'DiskType',
      fromSDGId: 'FromSDGId',
      instanceId: 'InstanceId',
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

