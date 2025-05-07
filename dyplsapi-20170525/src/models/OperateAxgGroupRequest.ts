// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateAxgGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The group ID in the AXG binding.
   * 
   * You can view the group ID by using either of the following methods:
   * 
   * *   On the **Number Pool Management** page in the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account), filter AXG private numbers and click **Number Group G Management** to view the group IDs of number groups G.****
   * *   If the [CreateAxgGroup](https://help.aliyun.com/document_detail/110250.html) operation is called to create number group G, the value of **GroupId** in the response of the CreateAxgGroup operation is specified as the value of the request parameter **GroupId** of the OperateAxgGroup operation.
   * 
   * >  Number group G must have one or more phone numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  groupId?: number;
  /**
   * @remarks
   * The phone numbers that you add to number group G. Separate the phone numbers with commas (,). You can add up to 200 phone numbers at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****,1380000****
   */
  numbers?: string;
  /**
   * @remarks
   * The type of the operation on number group G. Valid values:
   * 
   * *   **addNumbers**: adds phone numbers to number group G.
   * *   **deleteNumbers**: deletes phone numbers from number group G.
   * *   **overwriteNumbers**: replaces all phone numbers in number group G. All the original phone numbers are deleted from number group G, and new phone numbers are added to number group G.
   * 
   * > 
   * 
   * *   When you replace all phone numbers in number group G, the quantity of original phone numbers in number group G cannot exceed 200.
   * 
   * *   You can add up to 200 phone numbers to number group G at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * addNumbers
   */
  operateType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      numbers: 'Numbers',
      operateType: 'OperateType',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      numbers: 'string',
      operateType: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

