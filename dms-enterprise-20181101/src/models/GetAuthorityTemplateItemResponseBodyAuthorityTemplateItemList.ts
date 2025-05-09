// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemListAuthorityTemplateItem } from "./GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemListAuthorityTemplateItem";


export class GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemList extends $dara.Model {
  authorityTemplateItem?: GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemListAuthorityTemplateItem[];
  static names(): { [key: string]: string } {
    return {
      authorityTemplateItem: 'AuthorityTemplateItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateItem: { 'type': 'array', 'itemType': GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemListAuthorityTemplateItem },
    };
  }

  validate() {
    if(Array.isArray(this.authorityTemplateItem)) {
      $dara.Model.validateArray(this.authorityTemplateItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

