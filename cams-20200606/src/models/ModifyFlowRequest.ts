// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The folder.
   * 
   * This parameter is required.
   */
  categories?: string[];
  /**
   * @remarks
   * The space ID of the ISV sub-customer.
   * 
   * @example
   * cams-1sdkjwen2
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The URL of the WA Flow Endpoint
   * 
   * @example
   * http://www.***.com
   */
  endpointUri?: string;
  /**
   * @remarks
   * The ID of the flow.
   * 
   * @example
   * 21231232312
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * This parameter is required.
   * 
   * @example
   * Flow-**001
   */
  flowName?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      custSpaceId: 'CustSpaceId',
      endpointUri: 'EndpointUri',
      flowId: 'FlowId',
      flowName: 'FlowName',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      custSpaceId: 'string',
      endpointUri: 'string',
      flowId: 'string',
      flowName: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

