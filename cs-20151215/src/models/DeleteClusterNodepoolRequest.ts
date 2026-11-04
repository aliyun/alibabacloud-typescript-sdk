// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterNodepoolRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to force delete the node pool. Valid values:
   * - true: Force deletes the node pool. If the node pool contains existing nodes, the nodes are forcibly deleted.
   * - false: Does not force delete the node pool. If the node pool contains existing nodes, the node pool cannot be deleted and an error is returned.
   * 
   * Deleting a node pool does not automatically release subscription nodes. Automatic release subscription nodes, [change the billing method of the nodes from subscription to pay-as-you-go](https://www.alibabacloud.com/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1) and then log on to the ECS console automatic release the nodes.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

