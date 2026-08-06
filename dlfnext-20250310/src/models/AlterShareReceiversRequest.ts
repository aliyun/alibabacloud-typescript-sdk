// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlterShareReceiversRequest extends $dara.Model {
  /**
   * @remarks
   * The receivers to add.
   */
  addedReceivers?: string[];
  /**
   * @remarks
   * The receivers to remove.
   */
  removedReceivers?: string[];
  static names(): { [key: string]: string } {
    return {
      addedReceivers: 'addedReceivers',
      removedReceivers: 'removedReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedReceivers: { 'type': 'array', 'itemType': 'string' },
      removedReceivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.addedReceivers)) {
      $dara.Model.validateArray(this.addedReceivers);
    }
    if(Array.isArray(this.removedReceivers)) {
      $dara.Model.validateArray(this.removedReceivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

