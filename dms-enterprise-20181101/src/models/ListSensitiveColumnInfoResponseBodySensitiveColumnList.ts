// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumn } from "./ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumn";


export class ListSensitiveColumnInfoResponseBodySensitiveColumnList extends $dara.Model {
  sensitiveColumn?: ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumn[];
  static names(): { [key: string]: string } {
    return {
      sensitiveColumn: 'SensitiveColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveColumn: { 'type': 'array', 'itemType': ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumn },
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveColumn)) {
      $dara.Model.validateArray(this.sensitiveColumn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

