// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAuthorityTemplateResponseBodyAuthorityTemplateViewListAuthorityTemplateView } from "./ListAuthorityTemplateResponseBodyAuthorityTemplateViewListAuthorityTemplateView";


export class ListAuthorityTemplateResponseBodyAuthorityTemplateViewList extends $dara.Model {
  authorityTemplateView?: ListAuthorityTemplateResponseBodyAuthorityTemplateViewListAuthorityTemplateView[];
  static names(): { [key: string]: string } {
    return {
      authorityTemplateView: 'AuthorityTemplateView',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateView: { 'type': 'array', 'itemType': ListAuthorityTemplateResponseBodyAuthorityTemplateViewListAuthorityTemplateView },
    };
  }

  validate() {
    if(Array.isArray(this.authorityTemplateView)) {
      $dara.Model.validateArray(this.authorityTemplateView);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

