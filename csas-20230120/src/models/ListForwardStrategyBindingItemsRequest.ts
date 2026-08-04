// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListForwardStrategyBindingItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * This parameter is required.
   */
  forwardIds?: string[];
  /**
   * @remarks
   * The binding item type. Valid values:
   * - **Application**: internal-facing application
   * - **UserGroup**: user group.
   * 
   * @example
   * Application
   */
  itemType?: string;
  static names(): { [key: string]: string } {
    return {
      forwardIds: 'ForwardIds',
      itemType: 'ItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardIds: { 'type': 'array', 'itemType': 'string' },
      itemType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forwardIds)) {
      $dara.Model.validateArray(this.forwardIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

