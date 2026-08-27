// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The SpaceId of the ISV sub-customer.
   * 
   * @example
   * cams-sa2ksj21jksd
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow name.
   * 
   * @example
   * flow-21101
   */
  flowName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The pagination information.
   */
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

