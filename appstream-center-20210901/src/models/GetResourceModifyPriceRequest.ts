// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceModifyPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The total number of subscription resource nodes after the scale-out. Unit: nodes.
   * 
   * **The value must be greater than the current number of purchased nodes in the delivery group and cannot exceed the node quota of the account.** This parameter is not the number of added nodes or the number of sessions.
   * 
   * For example, if there is currently 1 node and you want to scale out to 2 nodes, specify 2 to indicate a final total of 2 nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The ID of the delivery group to be scaled out. You can query only one delivery group at a time.
   * 
   * The delivery group must belong to the current account and match ProductType. It must be billed by node on a subscription basis, have a normal order status, and be associated with a resource node pool.
   * 
   * You can obtain the cloud app delivery group ID by calling [ListAppInstanceGroup](https://api.aliyun.com/document/appstream-center/2021-09-01/ListAppInstanceGroup). You can call [GetAppInstanceGroup](https://api.aliyun.com/document/appstream-center/2021-09-01/GetAppInstanceGroup) to further verify the current configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The product type, which must match the product to which the target delivery group belongs. Valid values:
   * 
   * - CloudApp: WUYING Cloud App. Queries the resource scale-out price of a cloud app delivery group.
   * - CloudBrowser: Cloud Browser. Applies only to subscription browser delivery groups that are billed by node.
   * 
   * This operation does not apply to pay-as-you-go or browser groups billed by monthly active user (MAU).
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appInstanceGroupId: 'AppInstanceGroupId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appInstanceGroupId: 'string',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

