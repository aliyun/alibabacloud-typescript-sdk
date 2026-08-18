// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateDomainItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name list.
   */
  domainItems?: string[];
  /**
   * @remarks
   * The list ID. This is a unique business identifier used for policy references and add, delete, and modify operations.
   * 
   * @example
   * ladl-61aae0c0ba715e3b
   */
  listId?: string;
  /**
   * @remarks
   * The list type (Blacklist/Whitelist).
   * 
   * @example
   * la_domain_white_list
   */
  listType?: string;
  static names(): { [key: string]: string } {
    return {
      domainItems: 'DomainItems',
      listId: 'ListId',
      listType: 'ListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainItems: { 'type': 'array', 'itemType': 'string' },
      listId: 'string',
      listType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainItems)) {
      $dara.Model.validateArray(this.domainItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

