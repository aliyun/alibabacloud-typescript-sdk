// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDomainMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The list ID, which is a unique business identifier used for policy references and create, update, and delete operations.
   * 
   * This parameter is required.
   * 
   * @example
   * ladl-6f1exxxxx6ab59
   */
  listId?: string;
  /**
   * @remarks
   * The list type. Valid values:
   * - la_domain_white_list: domain name whitelist.
   * - la_domain_black_list: domain name blacklist.
   * 
   * This parameter is required.
   * 
   * @example
   * la_domain_white_list
   */
  listType?: string;
  static names(): { [key: string]: string } {
    return {
      listId: 'ListId',
      listType: 'ListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listId: 'string',
      listType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

