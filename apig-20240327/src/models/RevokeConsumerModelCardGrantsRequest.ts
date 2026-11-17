// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeConsumerModelCardGrantsRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of model card IDs to revoke within this API. Revoking non-existent entitlements is a valid no-op.
   */
  modelCardIds?: string[];
  /**
   * @remarks
   * The actual model group IDs to revoke within this API. When revoking only group entitlements, modelCardIds can be empty, and the group or principal is not required to still exist. At least one of the two target types must be non-empty. This operation does not delete consumers, keys, or quotas.
   */
  modelGroupIds?: string[];
  /**
   * @remarks
   * The immutable ID of the principal for revocation, not the name.
   * 
   * This parameter is required.
   * 
   * @example
   * cs-d00000000000000000000
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the principal for revocation. Valid values: Consumer, ConsumerGroup.
   * 
   * This parameter is required.
   * 
   * @example
   * Consumer
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      modelCardIds: 'modelCardIds',
      modelGroupIds: 'modelGroupIds',
      principalId: 'principalId',
      principalType: 'principalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardIds: { 'type': 'array', 'itemType': 'string' },
      modelGroupIds: { 'type': 'array', 'itemType': 'string' },
      principalId: 'string',
      principalType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelCardIds)) {
      $dara.Model.validateArray(this.modelCardIds);
    }
    if(Array.isArray(this.modelGroupIds)) {
      $dara.Model.validateArray(this.modelGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

