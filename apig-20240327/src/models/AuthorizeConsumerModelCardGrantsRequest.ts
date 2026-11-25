// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeConsumerModelCardGrantsRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of selected model card IDs for this API. This parameter can be empty or omitted, but at least one of modelCardIds and modelGroupIds must be non-empty.
   */
  modelCardIds?: string[];
  /**
   * @remarks
   * The actual model group IDs of the current instance. modelCardIds can be empty only when group licenses are granted. Group licenses allow zero intersection with the current API, but principal relationships with both target types empty cannot be saved.
   */
  modelGroupIds?: string[];
  /**
   * @remarks
   * The immutable ID of the authorization principal, not the name.
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

