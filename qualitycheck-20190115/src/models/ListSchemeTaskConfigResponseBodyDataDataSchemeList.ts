// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList } from "./ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList";


export class ListSchemeTaskConfigResponseBodyDataDataSchemeList extends $dara.Model {
  schemeList?: ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList[];
  static names(): { [key: string]: string } {
    return {
      schemeList: 'SchemeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeList: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList },
    };
  }

  validate() {
    if(Array.isArray(this.schemeList)) {
      $dara.Model.validateArray(this.schemeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

