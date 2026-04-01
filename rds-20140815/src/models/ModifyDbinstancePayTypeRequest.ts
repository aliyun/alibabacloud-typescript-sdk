// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstancePayTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1842vmucoa5w874
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The billing method of the instance. The value is fixed as **Prepaid**, which indicates the subscription billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The renewal cycle of the instance.
   * 
   * *   **Year**
   * *   **Month**
   * 
   * This parameter is required.
   * 
   * @example
   * Year
   */
  period?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * *   If you set the **Period** parameter to **Year**, the value of the **UsedTime** parameter ranges from 1 to 5.
   * *   If you set the **Period** parameter to **Month**, the value of the **UsedTime** parameter ranges from 1 to 11.
   * 
   * @example
   * 2
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      payType: 'PayType',
      period: 'Period',
      resourceOwnerId: 'ResourceOwnerId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      payType: 'string',
      period: 'string',
      resourceOwnerId: 'number',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

