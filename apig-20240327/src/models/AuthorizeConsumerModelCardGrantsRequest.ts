// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeConsumerModelCardGrantsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the selected model cards for this API. You can leave this parameter empty or omit it, but at least one of modelCardIds and modelGroupIds must be specified.
   */
  modelCardIds?: string[];
  /**
   * @remarks
   * The actual model group IDs of the current instance. You can leave modelCardIds empty only when you grant group entitlements. Group entitlements allow zero intersection with the current API, but you cannot save principal relationships if both target types are empty.
   */
  modelGroupIds?: string[];
  /**
   * @remarks
   * The immutable ID of the authorization principal. This is not the name.
   * 
   * This parameter is required.
   * 
   * @example
   * cs-d00000000000000000000
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the authorization principal. Valid values: Consumer and ConsumerGroup.
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

