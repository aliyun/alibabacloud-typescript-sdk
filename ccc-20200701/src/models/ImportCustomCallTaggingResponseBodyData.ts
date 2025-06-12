// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportCustomCallTaggingResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1312121****
   */
  item?: string;
  /**
   * @example
   * CUSTOM_NUMBER_DUPLICATED
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

