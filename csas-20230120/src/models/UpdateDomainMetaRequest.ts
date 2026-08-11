// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The list ID. This is a unique business identifier used for policy references and add, delete, or modify operations.
   * 
   * @example
   * ladl-6f1exxxxx6ab59
   */
  listId?: string;
  /**
   * @remarks
   * The list type.
   * 
   * @example
   * la_domain_white_list
   */
  listType?: string;
  /**
   * @remarks
   * The list name. Maximum length: 32 characters.
   * 
   * @example
   * new_office_domain
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      listId: 'ListId',
      listType: 'ListType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listId: 'string',
      listType: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

