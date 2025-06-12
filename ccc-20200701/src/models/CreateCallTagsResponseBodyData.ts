// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCallTagsResponseBodyData extends $dara.Model {
  /**
   * @example
   * TagC
   */
  item?: string;
  /**
   * @example
   * CALL_TAG_NAME_DUPLICATED
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

