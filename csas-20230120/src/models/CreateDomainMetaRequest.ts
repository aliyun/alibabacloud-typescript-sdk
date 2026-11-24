// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The list type.
   * 
   * @example
   * la_domain_black_list
   */
  listType?: string;
  /**
   * @remarks
   * The name of the list. The name can be up to 32 characters in length.
   * 
   * @example
   * office_domain
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      listType: 'ListType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

