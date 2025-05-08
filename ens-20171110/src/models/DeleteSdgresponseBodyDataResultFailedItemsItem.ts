// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSDGResponseBodyDataResultFailedItemsItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the shared data group (SDG).
   * 
   * @example
   * sdg-dfet5vvvgy
   */
  sdgId?: string;
  static names(): { [key: string]: string } {
    return {
      sdgId: 'SdgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

