// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListForwardStrategyBindingItemsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  forwardIds?: string[];
  /**
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

