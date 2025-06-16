// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAuditContentErrorTypesResponseBodyDataSubClasses } from "./ListAuditContentErrorTypesResponseBodyDataSubClasses";


export class ListAuditContentErrorTypesResponseBodyData extends $dara.Model {
  /**
   * @example
   * ContentAccuracy
   */
  majorClassCode?: string;
  majorClassName?: string;
  subClasses?: ListAuditContentErrorTypesResponseBodyDataSubClasses[];
  static names(): { [key: string]: string } {
    return {
      majorClassCode: 'MajorClassCode',
      majorClassName: 'MajorClassName',
      subClasses: 'SubClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      majorClassCode: 'string',
      majorClassName: 'string',
      subClasses: { 'type': 'array', 'itemType': ListAuditContentErrorTypesResponseBodyDataSubClasses },
    };
  }

  validate() {
    if(Array.isArray(this.subClasses)) {
      $dara.Model.validateArray(this.subClasses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

