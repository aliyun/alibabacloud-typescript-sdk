// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlowJSONAssestRequest extends $dara.Model {
  /**
   * @remarks
   * The Space ID of the ISV sub-customer or the instance ID of the direct customer. You can view the Space ID on the
   * <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList)
   * page.
   * 
   * @example
   * cams-kei****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow ID returned when you created the Flow by calling the [CreateFlow](https://help.aliyun.com/document_detail/2638742.html) operation.
   * 
   * @example
   * 17b6****************************
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

