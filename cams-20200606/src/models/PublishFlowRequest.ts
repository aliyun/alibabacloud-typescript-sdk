// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the ISV sub-customer or the instance ID of the direct customer. You can view the Space ID on the
   * <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)
   * <props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList)
   * page.
   * 
   * @example
   * cams-kei****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow ID, which is the FlowId returned by the [CreateFlow](https://help.aliyun.com/document_detail/2638742.html) operation when you create a WhatsApp Flow.
   * 
   * This parameter is required.
   * 
   * @example
   * 333993838***
   */
  flowId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowId: 'FlowId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowId: 'string',
      ownerId: 'number',
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

