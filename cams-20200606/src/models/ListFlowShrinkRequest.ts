// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowShrinkRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  custSpaceId?: string;
  /**
   * @example
   * 示例值
   */
  flowName?: string;
  ownerId?: number;
  pageShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowName: 'FlowName',
      ownerId: 'OwnerId',
      pageShrink: 'Page',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowName: 'string',
      ownerId: 'number',
      pageShrink: 'string',
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

