// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutTargetsResponseBodyDataErrorEntries } from "./PutTargetsResponseBodyDataErrorEntries";


export class PutTargetsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the failed event target.
   */
  errorEntries?: PutTargetsResponseBodyDataErrorEntries[];
  /**
   * @remarks
   * The number of failed event targets. Valid values:
   * 
   * *   0: All event targets succeeded.
   * *   An integer other than 0: indicates the number of failed event targets.
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
      errorEntries: { 'type': 'array', 'itemType': PutTargetsResponseBodyDataErrorEntries },
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

