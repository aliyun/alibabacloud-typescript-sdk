// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanAdditionalListsRequest extends $dara.Model {
  additionalTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * windows
   */
  devType?: string;
  /**
   * @example
   * .tmp
   */
  listDetail?: string;
  listIds?: string[];
  /**
   * @example
   * Whitelist
   */
  listType?: string;
  static names(): { [key: string]: string } {
    return {
      additionalTypes: 'AdditionalTypes',
      devType: 'DevType',
      listDetail: 'ListDetail',
      listIds: 'ListIds',
      listType: 'ListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalTypes: { 'type': 'array', 'itemType': 'string' },
      devType: 'string',
      listDetail: 'string',
      listIds: { 'type': 'array', 'itemType': 'string' },
      listType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalTypes)) {
      $dara.Model.validateArray(this.additionalTypes);
    }
    if(Array.isArray(this.listIds)) {
      $dara.Model.validateArray(this.listIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

