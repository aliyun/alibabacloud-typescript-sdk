// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return historical O\\&M tasks. Valid values:
   * 
   * *   **0** (default): The system returns only pending O\\&M tasks.
   * *   **1**: The system returns historical O\\&M tasks.
   * 
   * @example
   * 0
   */
  isHistory?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID. You can call the [DescribeSecurityGroupConfiguration](https://help.aliyun.com/document_detail/146130.html) operation to query the resource group ID.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      isHistory: 'IsHistory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHistory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
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

