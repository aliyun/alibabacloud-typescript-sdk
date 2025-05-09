// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAuthorityTemplateResponseBodyAuthorityTemplateViewAuthorityTemplateItemListAuthorityTemplateItem } from "./GetAuthorityTemplateResponseBodyAuthorityTemplateViewAuthorityTemplateItemListAuthorityTemplateItem";


export class GetAuthorityTemplateResponseBodyAuthorityTemplateViewAuthorityTemplateItemList extends $dara.Model {
  authorityTemplateItem?: GetAuthorityTemplateResponseBodyAuthorityTemplateViewAuthorityTemplateItemListAuthorityTemplateItem[];
  static names(): { [key: string]: string } {
    return {
      authorityTemplateItem: 'AuthorityTemplateItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateItem: { 'type': 'array', 'itemType': GetAuthorityTemplateResponseBodyAuthorityTemplateViewAuthorityTemplateItemListAuthorityTemplateItem },
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

