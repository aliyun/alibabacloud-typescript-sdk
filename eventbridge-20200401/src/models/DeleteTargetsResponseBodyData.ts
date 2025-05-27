// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteTargetsResponseBodyDataErrorEntries } from "./DeleteTargetsResponseBodyDataErrorEntries";


export class DeleteTargetsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the event body that failed to be processed.
   */
  errorEntries?: DeleteTargetsResponseBodyDataErrorEntries[];
  /**
   * @remarks
   * The number of event bodies that failed to be processed. Valid values: 0: No event bodies failed to be processed. An integer other than 0: the number of event bodies that failed to be processed.
   * 
   * @example
   * 0
   */
  errorEntriesCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorEntries: 'ErrorEntries',
      errorEntriesCount: 'ErrorEntriesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorEntries: { 'type': 'array', 'itemType': DeleteTargetsResponseBodyDataErrorEntries },
      errorEntriesCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.errorEntries)) {
      $dara.Model.validateArray(this.errorEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

