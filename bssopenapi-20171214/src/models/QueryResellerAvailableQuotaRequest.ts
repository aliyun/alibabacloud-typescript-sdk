// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResellerAvailableQuotaRequest extends $dara.Model {
  itemCodes?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      itemCodes: 'ItemCodes',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemCodes: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

