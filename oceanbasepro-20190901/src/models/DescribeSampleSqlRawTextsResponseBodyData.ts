// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleSqlRawTextsResponseBodyData extends $dara.Model {
  sqlText?: string[];
  static names(): { [key: string]: string } {
    return {
      sqlText: 'SqlText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlText: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sqlText)) {
      $dara.Model.validateArray(this.sqlText);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

