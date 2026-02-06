// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFlowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  categories?: string[];
  /**
   * @example
   * 示例值示例值
   */
  custSpaceId?: string;
  /**
   * @example
   * http://www.***.com
   */
  endpointUri?: string;
  /**
   * @example
   * 示例值
   */
  flowId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
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

